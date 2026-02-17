// import Link from "next/link";
// import {
//     ChevronRight,
//     LayoutGrid,
//     Activity,
//     Thermometer,
//     Pill,
//     HeartPulse,
//     ShieldPlus,
//     Stethoscope
// } from "lucide-react";
// import { Category } from "@/types/medicine";
// import { getAllCategories } from "@/services/category.service";

// const getDynamicIcon = (slug: string) => {
//     const iconClass = "h-5 w-5 transition-transform duration-500 group-hover:scale-110";

//     const iconMap: Record<string, React.ReactNode> = {
//         'pain-relief': <HeartPulse className={`${iconClass} text-rose-500`} />,
//         'first-aid': <ShieldPlus className={`${iconClass} text-blue-500`} />,
//         'fever-inflammation': <Thermometer className={`${iconClass} text-orange-500`} />,
//         'cold-and-flu': <Pill className={`${iconClass} text-teal-500`} />,
//         'digestive-care': <Activity className={`${iconClass} text-emerald-500`} />,
//     };

//     return iconMap[slug] || <Stethoscope className={`${iconClass} text-green-600`} />;
// };

// export default async function CategorySection() {
//     const res = await getAllCategories();
//     const categories = res.data || [];

//     return (
//         <section className="py-12 bg-transparent">
//             <div className="container mx-auto">
//                 {/* Compact Header */}
//                 <div className="flex items-center justify-between mb-8 px-2">
//                     <div className="flex items-center gap-3">
//                         <div className="p-2 bg-green-600 rounded-xl">
//                             <LayoutGrid className="h-5 w-5 text-white" />
//                         </div>
//                         <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
//                             Categories
//                         </h2>
//                     </div>

//                     <Link
//                         href="/medicine"
//                         className="group flex items-center gap-1 text-[12px] font-bold text-green-600 hover:underline uppercase tracking-tighter"
//                     >
//                         See All <ChevronRight className="h-4 w-4" />
//                     </Link>
//                 </div>

//                 {/* Small & Compact Grid with Hover Glow */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
//                     {categories.map((category: Category) => (
//                         <Link
//                             key={category.id}
//                             href={`/medicine?categoryId=${category.id}&page=1`}
//                             className="group flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:-translate-y-1"
//                         >
//                             {/* Smaller Icon Box */}
//                             <div className="p-2.5 bg-slate-50 rounded-xl group-hover:bg-green-50 shrink-0 transition-colors duration-300">
//                                 {getDynamicIcon(category.slug)}
//                             </div>

//                             {/* Category Name */}
//                             <h3 className="font-bold text-slate-700 group-hover:text-green-700 transition-colors text-xs md:text-sm line-clamp-1">
//                                 {category.name}
//                             </h3>
//                         </Link>
//                     ))}
//                 </div>

//                 {/* Empty State */}
//                 {categories.length === 0 && (
//                     <div className="text-center py-8 bg-white/50 rounded-2xl border border-dashed border-slate-200">
//                         <p className="text-slate-400 text-sm font-medium">No categories found.</p>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// }


import Link from "next/link";
import {
    ChevronRight,
    LayoutGrid,
    Activity,
    Thermometer,
    Pill,
    HeartPulse,
    ShieldPlus,
    Stethoscope,
    ArrowRight
} from "lucide-react";
import { Category } from "@/types/medicine";
import { getAllCategories } from "@/services/category.service";
import { cn } from "@/lib/utils";

const getDynamicIcon = (slug: string) => {
    const iconClass = "h-7 w-7 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6";

    const iconMap: Record<string, React.ReactNode> = {
        'pain-relief': <HeartPulse className={`${iconClass} text-rose-500`} />,
        'first-aid': <ShieldPlus className={`${iconClass} text-blue-500`} />,
        'fever-inflammation': <Thermometer className={`${iconClass} text-orange-500`} />,
        'cold-and-flu': <Pill className={`${iconClass} text-teal-500`} />,
        'digestive-care': <Activity className={`${iconClass} text-emerald-500`} />,
    };

    return iconMap[slug] || <Stethoscope className={`${iconClass} text-green-600`} />;
};

export default async function CategorySection() {
    const res = await getAllCategories();
    const categories = res.data || [];

    return (
        <section className="py-16 relative overflow-hidden ">
            {/* Subtle decorative background element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[#22c55e] font-bold text-xs uppercase tracking-widest">
                            <span className="w-8 h-[2px] bg-[#22c55e]" />
                            Browse by Need
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                            Health <span className="text-[#22c55e]">Categories</span>
                        </h2>
                    </div>

                    <Link
                        href="/medicine"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:border-[#22c55e] hover:text-[#22c55e] transition-all shadow-sm"
                    >
                        View All Categories 
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Vertical Category Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {categories.map((category: Category) => (
                        <Link
                            key={category.id}
                            href={`/medicine?categoryId=${category.id}&page=1`}
                            className="group relative flex flex-col items-center text-center bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-green-100/50 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Hover Background Wash */}
                            <div className="absolute inset-0 bg-gradient-to-b from-green-50/0 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon Container */}
                            <div className="relative mb-4 p-4 rounded-2xl bg-slate-50 group-hover:bg-white transition-colors duration-500 shadow-inner group-hover:shadow-sm">
                                {getDynamicIcon(category.slug)}
                            </div>

                            {/* Category Name */}
                            <div className="relative z-10">
                                <h3 className="font-bold text-slate-800 group-hover:text-green-700 transition-colors text-sm md:text-base mb-1">
                                    {category.name}
                                </h3>
                                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    Explore Products
                                </p>
                            </div>
                            
                            {/* Accent line on bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#22c55e] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {categories.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
                        <div className="p-4 bg-slate-50 rounded-full mb-4">
                            <LayoutGrid className="h-8 w-8 text-slate-300" />
                        </div>
                        <p className="text-slate-500 font-bold tracking-tight">No categories available right now</p>
                        <p className="text-slate-400 text-sm">Check back later for updated inventory.</p>
                    </div>
                )}
            </div>
        </section>
    );
}