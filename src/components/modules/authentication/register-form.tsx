"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import {
  User,
  Store,
  Eye,
  EyeOff,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { env } from "@/env";

interface signUpData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export enum UserRole {
  CUSTOMER = "CUSTOMER",
  SELLER = "SELLER",
}

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Minimum 8 characters"),
  becomeSeller: z.boolean(),
});

const handleGoogleLogin = async () => {
  await authClient.signIn.social({
    provider: 'google',
    callbackURL: env.NEXT_PUBLIC_FRONTEND_URL
  })
}

export function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      becomeSeller: false,
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Creating account...");
      try {
        const signUpData: signUpData = {
          name: value.name,
          email: value.email,
          password: value.password,
          role: value.becomeSeller ? UserRole.SELLER : UserRole.CUSTOMER,
        };

        const { error } = await authClient.signUp.email(signUpData);

        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }

        toast.success(
          `Account created as ${value.becomeSeller ? "Seller" : "Customer"}`,
          { id: toastId }
        );

        router.push("/login");
        router.refresh();
      } catch {
        toast.error("Something went wrong", { id: toastId });
      }
    },
  });

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-border bg-[#f8fafc]">
      <CardHeader className="flex flex-col items-center gap-1 py-4"> {/* Reduced vertical padding & gap */}
        <div className="flex items-center">
          <Image src="/logo2.png" alt="MediCorner" width={50} height={50} priority />
          <div className="leading-tight hidden md:block">
            <p className="text-xl font-bold text-[#15a215] ">MediCorner</p>
          </div>
        </div>

        <CardTitle className="text-lg text-[#0f172a] mt-1">
          Create your account
        </CardTitle>
      </CardHeader>

      <CardContent className="pb-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          {/* gap-3 used instead of space-y-4 for tighter layout */}
          <FieldGroup className="flex flex-col gap-3">
            {/* NAME */}
            <form.Field name="name">
              {(field) => (
                <Field className="space-y-1">
                  <FieldLabel className="text-xs font-bold uppercase text-slate-500">Full Name</FieldLabel>
                  <Input
                    className="h-10 rounded-xl"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="John Doe"
                  />
                  <FieldError className="text-[10px]" errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            {/* EMAIL */}
            <form.Field name="email">
              {(field) => (
                <Field className="space-y-1">
                  <FieldLabel className="text-xs font-bold uppercase text-slate-500">Email</FieldLabel>
                  <Input
                    className="h-10 rounded-xl"
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="john@example.com"
                  />
                  <FieldError className="text-[10px]" errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            {/* PASSWORD */}
            <form.Field name="password">
              {(field) => (
                <Field className="space-y-1">
                  <FieldLabel className="text-xs font-bold uppercase text-slate-500">Password</FieldLabel>
                  <div className="relative">
                    <Input
                      className="h-10 rounded-xl pr-12"
                      type={showPassword ? "text" : "password"}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#0f172a]"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <FieldError className="text-[10px]" errors={field.state.meta.errors} />
                </Field>
              )}
            </form.Field>

            {/* ROLE TOGGLE */}
            <form.Field name="becomeSeller">
              {(field) => (
                <Field className="space-y-1.5">
                  <FieldLabel className="text-xs font-bold uppercase text-slate-500">Account Type</FieldLabel>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => field.handleChange(false)}
                      className={cn(
                        "flex items-center justify-center gap-2 rounded-xl border p-2 text-sm font-semibold transition-all",
                        !field.state.value
                          ? "border-[#22c55e] bg-[#22c55e]/10 text-[#22c55e]"
                          : "border-slate-200 bg-white text-slate-500"
                      )}
                    >
                      <User className="h-4 w-4" />
                      Customer
                    </button>

                    <button
                      type="button"
                      onClick={() => field.handleChange(true)}
                      className={cn(
                        "flex items-center justify-center gap-2 rounded-xl border p-2 text-sm font-semibold transition-all",
                        field.state.value
                          ? "border-[#22c55e] bg-[#22c55e]/10 text-[#22c55e]"
                          : "border-slate-200 bg-white text-slate-500"
                      )}
                    >
                      <Store className="h-4 w-4" />
                      Seller
                    </button>
                  </div>
                </Field>
              )}
            </form.Field>

            {/* SUBMIT */}
            <Button
              type="submit"
              className="w-full h-11 bg-[#22c55e] hover:bg-green-600 rounded-xl font-bold mt-2"
            >
              Create Account
            </Button>

          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="justify-center text-sm text-muted-foreground pb-6">
        Already have an account?
        <Link
          href="/login"
          className="ml-1 text-[#22c55e] font-bold hover:underline"
        >
          Login
        </Link>
      </CardFooter>
    </Card>
  );
}