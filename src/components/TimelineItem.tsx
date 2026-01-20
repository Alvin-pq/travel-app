'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ItineraryItem } from '@/types';
import { MapPin, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TimelineItemProps {
    item: ItineraryItem;
    index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            className="group relative mb-8 pl-8 last:mb-0"
        >
            {/* Decorative vertical line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-stone-300 group-last:bg-transparent" />

            {/* Time Indicator */}
            <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full border border-stone-400 bg-stone-50 z-10" />

            <div className="flex flex-col gap-3">
                <span className="text-xs font-bold tracking-widest text-stone-500 uppercase">{item.time}</span>

                <div className={twMerge(
                    "relative overflow-hidden p-6 transition-all duration-300",
                    "bg-white/90 backdrop-blur-md rounded-xl border border-white/20 shadow-sm",
                    "hover:shadow-md hover:scale-[1.02]"
                )}>
                    {/* Subtle noise texture just for card */}
                    <div className="absolute inset-0 opacity-[0.03] bg-black pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className={clsx(
                                    "inline-block px-2 py-0.5 mb-2 text-[10px] font-bold tracking-wider uppercase rounded-sm",
                                    item.type === 'food' ? 'bg-orange-100 text-orange-800' : 'bg-stone-100 text-stone-800'
                                )}>
                                    {item.type}
                                </span>
                                <h3 className="font-serif text-2xl text-stone-900 leading-tight mb-1">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="text-sm font-medium text-stone-400 font-mono">
                                {item.cost === '$0' ? 'Free' : item.cost}
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-stone-500 text-sm group/link cursor-pointer">
                            <MapPin size={14} className="mr-1.5" />
                            <span className="border-b border-transparent group-hover/link:border-stone-400 transition-colors">
                                {item.location}
                            </span>
                            <ArrowRight size={14} className="ml-auto opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
