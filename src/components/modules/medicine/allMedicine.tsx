

import { MedicineServices } from "@/services/medecine.service";
import { MedicineCard } from "@/components/modules/medicine/card";
import { MedicineFilters as IMedicineFilters, Category } from "@/types/medicine";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, CircleDollarSign } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface Props {
    searchParams: Promise<Partial<Record<keyof IMedicineFilters, string>>>;
}

export default async function MedicinesPage({ searchParams }: Props) {
    const resolvedParams = await searchParams;


    const filters: IMedicineFilters = {
        search: resolvedParams.search,
        categoryId: resolvedParams.categoryId,
        manufacturer: resolvedParams.manufacturer,
        minPrice: resolvedParams.minPrice ? Number(resolvedParams.minPrice) : undefined,
        maxPrice: resolvedParams.maxPrice ? Number(resolvedParams.maxPrice) : undefined,
        page: resolvedParams.page ? Number(resolvedParams.page) : 1,
        sortBy: resolvedParams.sortBy || "name",
    };

    const [medRes, catRes, manRes] = await Promise.all([
        MedicineServices.getAllMedicine(filters),
        MedicineServices.getCategories(),
        MedicineServices.getManufacturers(),
    ]);

    const medicines = medRes.data?.data || [];
    const pagination = medRes.data?.pagination;
    const categories = catRes.data || [];
    const manufacturers = manRes.data || [];


    const getQueryPath = (updates: Partial<Record<string, string | number | undefined>>) => {
        const current = new URLSearchParams(resolvedParams as Record<string, string>);
        Object.entries(updates).forEach(([key, value]) => {
            if (value && value !== "all") current.set(key, value.toString());
            else current.delete(key);
        });
        if (!updates.page) current.set("page", "1");
        return `/medicine?${current.toString()}`;
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] pb-12">

            <div className="bg-white border-b sticky top-0 z-40 py-6">
                <div className="container mx-auto px-4">
                    <form action={async (formData: FormData) => {
                        "use server";
                        const search = formData.get("search") as string;
                        const params = new URLSearchParams(resolvedParams as Record<string, string>);
                        if (search) params.set("search", search); else params.delete("search");
                        params.set("page", "1");
                        redirect(`/medicine?${params.toString()}`);
                    }} className="flex gap-3 max-w-3xl mx-auto">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <Input 
                                name="search"
                                defaultValue={filters.search}
                                placeholder="Search by medicine or brand name..." 
                                className="pl-12 h-12 rounded-full border-slate-200 focus:ring-green-500"
                            />
                        </div>
                        <Button type="submit" className="h-12 px-8 rounded-full bg-green-600 hover:bg-green-700 font-bold shadow-lg shadow-green-100 transition-all">
                            Search
                        </Button>
                    </form>
                </div>
            </div>

            <main className="container mx-auto px-4 py-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    

                    <aside className="w-full lg:w-72 shrink-0 space-y-6">
                        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-32">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-lg flex items-center gap-2">
                                    <SlidersHorizontal className="h-5 w-5 text-green-600" /> Filters
                                </h3>
                                <Link href="/medicine" className="text-xs font-bold text-red-500 hover:text-red-600 uppercase tracking-tighter">Reset</Link>
                            </div>


                            <div className="space-y-3 mb-8">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Category</label>
                                <Select onValueChange={(v) => redirect(getQueryPath({ categoryId: v }))} defaultValue={filters.categoryId || "all"}>
                                    <SelectTrigger className="w-full bg-slate-50 border-none h-11">
                                        <SelectValue placeholder="All Categories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Categories</SelectItem>
                                        {categories.map((c: Category) => (
                                            <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>


                            <div className="space-y-3 mb-8">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Manufacturer</label>
                                <Select onValueChange={(v) => redirect(getQueryPath({ manufacturer: v }))} defaultValue={filters.manufacturer || "all"}>
                                    <SelectTrigger className="w-full bg-slate-50 border-none h-11">
                                        <SelectValue placeholder="All Brands" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Brands</SelectItem>
                                        {manufacturers.map((m: string) => (
                                            <SelectItem key={m} value={m}>{m}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>


                            <div className="space-y-3 pt-6 border-t border-slate-100">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <CircleDollarSign className="h-4 w-4" /> Price Range (৳)
                                </label>
                                <form action={async (formData: FormData) => {
                                    "use server";
                                    const min = formData.get("minPrice") as string;
                                    const max = formData.get("maxPrice") as string;
                                    const params = new URLSearchParams(resolvedParams as Record<string, string>);
                                    if (min) params.set("minPrice", min); else params.delete("minPrice");
                                    if (max) params.set("maxPrice", max); else params.delete("maxPrice");
                                    params.set("page", "1");
                                    redirect(`/medicine?${params.toString()}`);
                                }} className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Input name="minPrice" type="number" placeholder="Min" defaultValue={filters.minPrice} className="bg-slate-50 h-10 text-sm" />
                                        <span className="text-slate-300">—</span>
                                        <Input name="maxPrice" type="number" placeholder="Max" defaultValue={filters.maxPrice} className="bg-slate-50 h-10 text-sm" />
                                    </div>
                                    <Button type="submit" variant="outline" className="w-full text-xs font-bold border-green-200 text-green-700 hover:bg-green-50">Apply Price</Button>
                                </form>
                            </div>
                        </div>
                    </aside>


                    <div className="flex-1 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-slate-500 text-sm font-medium italic">
                                Showing {medicines.length} results of {pagination?.total || 0} medicines
                            </h2>
                        </div>

                        {medicines.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {medicines.map((med) => (
                                    <MedicineCard key={med.id} medicine={med} />
                                ))}
                            </div>
                        ) : (
                            <div className="py-32 text-center bg-white rounded-3xl border-2 border-dashed border-slate-100">
                                <p className="text-slate-400 font-medium">No results found matching your criteria.</p>
                                <Link href="/medicine" className="text-green-600 text-sm font-bold mt-2 inline-block">Clear all filters</Link>
                            </div>
                        )}


                        {pagination && pagination.totalPages > 1 && (
                            <div className="flex items-center justify-center gap-4 mt-12">
                                <Button variant="ghost" className="rounded-full gap-2 text-slate-600" asChild disabled={filters.page === 1}>
                                    <Link href={getQueryPath({ page: (filters.page! - 1) })}>
                                        <ChevronLeft className="h-4 w-4" /> Prev
                                    </Link>
                                </Button>
                                <div className="flex items-center gap-2">
                                    <span className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold shadow-md">
                                        {filters.page}
                                    </span>
                                    <span className="text-slate-400 font-medium">of {pagination.totalPages}</span>
                                </div>
                                <Button variant="ghost" className="rounded-full gap-2 text-slate-600" asChild disabled={filters.page === pagination.totalPages}>
                                    <Link href={getQueryPath({ page: (filters.page! + 1) })}>
                                        Next <ChevronRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}