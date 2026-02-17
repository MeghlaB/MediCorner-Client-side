// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, User, Search } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
// import ShoppingCartSheet from "../modules/cart/cart";
// import { authClient } from "@/lib/auth-client";
// import { DropdownMenuAvatar } from "./avatarDropDown";

// interface NavItem {
//   title: string;
//   url: string;
// }

// const navItems: NavItem[] = [
//   { title: "Home", url: "/" },
//   { title: "Medicine", url: "/medicine" },
//   { title: "About", url: "/about" },
//   { title: "Contact", url: "/contact" },
// ];

// export function Navbar() {
//   const session = authClient.useSession();
//   const user = session.data?.user;
//   const isPending = session.isPending;

//   const pathname = usePathname();

//   const isActive = (url: string) =>
//     url === "/" ? pathname === "/" : pathname.startsWith(url);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-[#f8fafc]/95 backdrop-blur">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">

//           {/* LEFT: Logo + Nav */}
//           <div className="flex items-center gap-8">
//             <Link href="/" className="flex items-center">
//               <Image src="/logo2.png" alt="MediCorner" width={80} height={80} priority />
//               <div className="leading-tight hidden md:block">
//                 <p className="text-2xl font-bold text-[#15a215] ">MediCorner</p>
//               </div>
//             </Link>

//             <nav className="hidden lg:flex items-center gap-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.title}
//                   href={item.url}
//                   className={cn(
//                     "rounded-md px-3 py-2 text-sm font-medium transition-colors",
//                     isActive(item.url)
//                       ? "bg-[#22c55e] text-white"
//                       : "text-[#0f172a] hover:bg-green-50 hover:text-[#22c55e]"
//                   )}
//                 >
//                   {item.title}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* RIGHT: Actions */}
//           <div className="flex items-center gap-3">

//             {/* ১. ইউজার লগইন থাকলে Cart এবং Avatar দেখাবে */}
//             {!isPending && user ? (
//               <>
//                 <ShoppingCartSheet />
//                 <DropdownMenuAvatar />
//               </>
//             ) : !isPending ? (
//               /* ২. ইউজার লগইন না থাকলে Login/Signup বাটন দেখাবে (Desktop) */
//               <div className="hidden md:flex items-center gap-2">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   asChild
//                   className="border-[#22c55e] text-[#22c55e] hover:bg-green-50"
//                 >
//                   <Link href="/login">
//                     <User className="mr-2 h-4 w-4" />
//                     Login
//                   </Link>
//                 </Button>

//                 <Button
//                   size="sm"
//                   asChild
//                   className="bg-[#22c55e] hover:bg-green-600 text-white"
//                 >
//                   <Link href="/register">Sign Up</Link>
//                 </Button>
//               </div>
//             ) : (
//               /* লোডিং স্টেট (Optional) */
//               <div className="h-8 w-8 animate-pulse bg-slate-200 rounded-full" />
//             )}

//             {/* Mobile Menu */}
//             <Sheet>
//               <SheetTrigger asChild className="lg:hidden">
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-5 w-5" />
//                 </Button>
//               </SheetTrigger>

//               <SheetContent side="right" className="w-[300px] px-4">
//                 <div className="flex h-full flex-col">
//                   <div className="flex items-center pb-6 border-b">
//                     <Image src="/logo2.png" alt="MediCorner" width={60} height={60} />
//                     <p className="text-xl font-bold text-[#22c55e] font-syne">MediCorner</p>
//                   </div>

//                   <nav className="space-y-1 pt-4">
//                     {navItems.map((item) => (
//                       <SheetClose asChild key={item.title}>
//                         <Link
//                           href={item.url}
//                           className={cn(
//                             "block rounded-lg px-3 py-3 text-sm font-medium transition-colors",
//                             isActive(item.url)
//                               ? "bg-green-50 text-[#22c55e]"
//                               : "text-[#0f172a] hover:bg-green-50 hover:text-[#22c55e]"
//                           )}
//                         >
//                           {item.title}
//                         </Link>
//                       </SheetClose>
//                     ))}

                  
//                     {!isPending && !user && (
//                       <div className="pt-4 space-y-3 border-t mt-4">
//                         <SheetClose asChild>
//                           <Button variant="outline" className="w-full border-[#22c55e] text-[#22c55e]" asChild>
//                             <Link href="/login">Login</Link>
//                           </Button>
//                         </SheetClose>
//                         <SheetClose asChild>
//                           <Button className="w-full bg-[#22c55e] text-white" asChild>
//                             <Link href="/register">Create Account</Link>
//                           </Button>
//                         </SheetClose>
//                       </div>
//                     )}
//                   </nav>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }



"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User, Search, ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import ShoppingCartSheet from "../modules/cart/cart";
import { authClient } from "@/lib/auth-client";
import { DropdownMenuAvatar } from "./avatarDropDown";

interface NavItem {
  title: string;
  url: string;
}

const navItems: NavItem[] = [
  { title: "Home", url: "/" },
  { title: "Medicine", url: "/medicine" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
];

export function Navbar() {
  const session = authClient.useSession();
  const user = session.data?.user;
  const isPending = session.isPending;
  const pathname = usePathname();

  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* LEFT: Logo */}
          <Link href="/" className="group flex items-center gap-2 transition-transform hover:scale-[1.02]">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-green-100 p-1">
              <Image src="/logo2.png" alt="MediCorner" fill className="object-contain" priority />
            </div>
            <div className="leading-tight">
              <p className="text-xl font-bold tracking-tight text-slate-900">
                Medi<span className="text-[#22c55e]">Corner</span>
              </p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-slate-500">Pharmacy</p>
            </div>
          </Link>

          {/* CENTER: Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/60">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
                  isActive(item.url)
                    ? "bg-white text-[#22c55e] shadow-sm"
                    : "text-slate-600 hover:text-[#22c55e] hover:bg-white/50"
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Search - Hidden on tiny screens */}
            <div className="hidden sm:relative md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input 
                placeholder="Search medicines..." 
                className="w-[180px] lg:w-[240px] pl-9 bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-green-500 transition-all"
              />
            </div>

            <div className="flex items-center gap-2 border-l border-slate-200 pl-2 md:pl-4">
              {!isPending && user ? (
                <div className="flex items-center gap-3">
                  <ShoppingCartSheet />
                  <DropdownMenuAvatar />
                </div>
              ) : !isPending ? (
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hidden md:flex text-slate-600 hover:text-green-600 hover:bg-green-50"
                  >
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="bg-[#22c55e] hover:bg-green-600 text-white rounded-full px-5 shadow-lg shadow-green-200 transition-all hover:shadow-none"
                  >
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </div>
              ) : (
                <div className="h-9 w-9 animate-pulse bg-slate-200 rounded-full" />
              )}

              {/* Mobile Menu Trigger */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100">
                    <Menu className="h-6 w-6 text-slate-700" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[320px] p-0">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center gap-2 p-6 border-b">
                      <Image src="/logo2.png" alt="MediCorner" width={40} height={40} />
                      <p className="text-xl font-bold text-slate-900">MediCorner</p>
                    </div>

                    <div className="flex-1 overflow-y-auto py-6 px-4">
                      <div className="mb-6 relative sm:hidden">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <Input placeholder="Search..." className="pl-9 bg-slate-50" />
                      </div>
                      
                      <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Menu</p>
                      <nav className="space-y-1">
                        {navItems.map((item) => (
                          <SheetClose asChild key={item.title}>
                            <Link
                              href={item.url}
                              className={cn(
                                "flex items-center rounded-xl px-4 py-3 text-base font-medium transition-all",
                                isActive(item.url)
                                  ? "bg-green-50 text-[#22c55e]"
                                  : "text-slate-700 hover:bg-slate-50"
                              )}
                            >
                              {item.title}
                            </Link>
                          </SheetClose>
                        ))}
                      </nav>
                    </div>

                    {!isPending && !user && (
                      <div className="p-6 border-t bg-slate-50/50 space-y-3">
                        <SheetClose asChild>
                          <Button variant="outline" className="w-full rounded-xl border-slate-200" asChild>
                            <Link href="/login">Log In</Link>
                          </Button>
                        </SheetClose>
                        <SheetClose asChild>
                          <Button className="w-full bg-[#22c55e] hover:bg-green-600 rounded-xl" asChild>
                            <Link href="/register">Create Account</Link>
                          </Button>
                        </SheetClose>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}