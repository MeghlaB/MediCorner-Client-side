


// import React from 'react';

// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowRight, ShieldCheck, Truck } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface HeroSectionProps {
//     title?: string;
//     description?: string;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//     title = 'Your Trusted Online Medicine Shop',
//     description = 'Buy genuine OTC medicines from verified sellers. Fast delivery across Bangladesh.',
// }) => {
//     return (
//         <section className="py-8 md:py-12 bg-transparent overflow-hidden">
//             <div className="max-w-7xl mx-auto px-4">
//                 <div className="grid lg:grid-cols-2 gap-8 items-center">

//                     {/* Left: Text Content */}
//                     <div className="space-y-6 text-center lg:text-left">
//                         <div className="space-y-2">
//                             <span className="text-green-600 font-bold text-xs uppercase tracking-[0.15em]">
//                                 Reliable Healthcare
//                             </span>
//                             <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
//                                 {title}
//                             </h1>
//                             <p className="text-slate-600 text-base md:text-lg max-w-lg mx-auto lg:mx-0 font-medium">
//                                 {description}
//                             </p>
//                         </div>

//                         <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
//                             <Button asChild className="h-12 px-6 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold transition-all shadow-sm">
//                                 <Link href="/medicine" className="flex items-center gap-2">
//                                     Shop Now <ArrowRight size={16} />
//                                 </Link>
//                             </Button>

//                             <Button asChild variant="outline" className="h-12 px-6 rounded-xl border-slate-200 text-slate-700 font-bold hover:bg-slate-50">
//                                 <Link href="/register">Sell Medicine</Link>
//                             </Button>
//                         </div>

//                         {/* Minimal Trust Line */}
//                         <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-2">
//                             <div className="flex items-center gap-1.5 text-slate-400">
//                                 <ShieldCheck size={16} className="text-green-500" />
//                                 <span className="text-[11px] font-bold uppercase">Verified</span>
//                             </div>
//                             <div className="flex items-center gap-1.5 text-slate-400">
//                                 <Truck size={16} className="text-green-500" />
//                                 <span className="text-[11px] font-bold uppercase">Fast Delivery</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right: Illustration */}
//                     <div className="relative flex justify-center lg:justify-end">
//                         <div className="w-full max-w-[450px]">
//                             <Image
//                                 src="/hero-image.png"
//                                 alt="Healthcare Illustration"
//                                 width={450}
//                                 height={350}
//                                 className="object-contain"
//                                 priority
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;



"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
    title?: string;
    description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title = 'Your Trusted Online Medicine Shop',
    description = 'Buy genuine OTC medicines from verified sellers. Fast delivery across Bangladesh with professional care.',
}) => {
    return (
        <section className="relative py-12 lg:py-20 overflow-hidden ">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left: Text Content */}
                    <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-green-700 font-bold text-[10px] uppercase tracking-wider">
                                    Now active in 12+ Districts
                                </span>
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                                Your Trusted Online <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                                    Medicine Shop
                                </span>
                            </h1>
                            
                            <p className="text-slate-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Button asChild size="lg" className="h-14 px-8 rounded-2xl bg-[#22c55e] hover:bg-green-600 text-white font-bold transition-all shadow-xl shadow-green-200 hover:shadow-none">
                                <Link href="/medicine" className="flex items-center gap-2 text-lg">
                                    Shop Now <ArrowRight size={20} />
                                </Link>
                            </Button>

                            <Button asChild variant="ghost" size="lg" className="h-14 px-8 rounded-2xl text-slate-600 font-bold hover:bg-slate-100">
                                <Link href="/register">Become a Seller</Link>
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-white shadow-sm rounded-lg">
                                    <ShieldCheck size={20} className="text-green-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold text-slate-900 uppercase">100% Genuine</p>
                                    <p className="text-[10px] text-slate-500 font-medium leading-none">Verified Batch</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-white shadow-sm rounded-lg">
                                    <Truck size={20} className="text-blue-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold text-slate-900 uppercase">Flash Delivery</p>
                                    <p className="text-[10px] text-slate-500 font-medium leading-none">Within 24 Hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Illustration with Floating Elements */}
                    <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                        {/* Floating Card */}
                        {/* <div className="absolute top-10 left-0 md:left-10 z-20 bg-white p-4 rounded-2xl shadow-2xl animate-bounce-slow hidden sm:block">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <Star className="text-yellow-600 fill-yellow-600" size={18} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">4.9/5 </p>
                                    <p className="text-[10px] text-slate-500">From 10k+ Customers</p>
                                </div>
                            </div>
                        </div> */}

                        <div className="relative w-full max-w-[500px] transition-transform duration-700 hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-transparent rounded-full filter blur-3xl opacity-30 animate-pulse" />
                            <Image
                                src="/hero-image-1.png"
                                alt="Healthcare Illustration"
                                width={550}
                                height={450}
                                className="relative z-10 object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Custom CSS for slow bounce animation */}
            <style jsx >{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;