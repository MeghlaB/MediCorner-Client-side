


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
    title?: string;
    description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title = 'Your Trusted Online Medicine Shop',
    description = 'Buy genuine OTC medicines from verified sellers. Fast delivery across Bangladesh.',
}) => {
    return (
        <section className="py-8 md:py-12 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    {/* Left: Text Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <div className="space-y-2">
                            <span className="text-green-600 font-bold text-xs uppercase tracking-[0.15em]">
                                Reliable Healthcare
                            </span>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                                {title}
                            </h1>
                            <p className="text-slate-600 text-base md:text-lg max-w-lg mx-auto lg:mx-0 font-medium">
                                {description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            <Button asChild className="h-12 px-6 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold transition-all shadow-sm">
                                <Link href="/medicine" className="flex items-center gap-2">
                                    Shop Now <ArrowRight size={16} />
                                </Link>
                            </Button>

                            <Button asChild variant="outline" className="h-12 px-6 rounded-xl border-slate-200 text-slate-700 font-bold hover:bg-slate-50">
                                <Link href="/register">Sell Medicine</Link>
                            </Button>
                        </div>

                        {/* Minimal Trust Line */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-2">
                            <div className="flex items-center gap-1.5 text-slate-400">
                                <ShieldCheck size={16} className="text-green-500" />
                                <span className="text-[11px] font-bold uppercase">Verified</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-400">
                                <Truck size={16} className="text-green-500" />
                                <span className="text-[11px] font-bold uppercase">Fast Delivery</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Illustration */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="w-full max-w-[450px]">
                            <Image
                                src="/hero-image.png"
                                alt="Healthcare Illustration"
                                width={450}
                                height={350}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;