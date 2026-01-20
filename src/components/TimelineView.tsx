'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ItineraryItem } from '@/types';
import { TimelineItem } from './TimelineItem';

interface TimelineViewProps {
    items: ItineraryItem[];
}

export const TimelineView: React.FC<TimelineViewProps> = ({ items }) => {
    const itemsByDay = items.reduce((acc, item) => {
        const day = item.day || 1;
        if (!acc[day]) acc[day] = [];
        acc[day].push(item);
        return acc;
    }, {} as Record<number, ItineraryItem[]>);

    return (
        <div className="max-w-md mx-auto px-6 py-12 pb-32 relative z-10">
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-16 pt-8 text-center"
            >
                <span className="block text-xs font-bold tracking-[0.2em] text-stone-500 uppercase mb-3">Travel Itinerary</span>
                <h1 className="font-serif text-5xl text-stone-900 mb-4 tracking-tight leading-none">
                    Tokyo<br /><span className="italic text-stone-400">Japon</span>
                </h1>
                <div className="inline-block h-px w-12 bg-stone-300 my-4" />
                <p className="text-sm font-medium text-stone-500">March 15 — 20, 2024</p>
            </motion.header>

            {Object.entries(itemsByDay).map(([day, dayItems], dayIndex) => (
                <div key={day} className="mb-16 last:mb-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-baseline gap-4 mb-8"
                    >
                        <h2 className="font-serif text-3xl italic text-stone-800">Day {day}</h2>
                        <div className="h-px flex-1 bg-stone-200" />
                    </motion.div>

                    <div className="pl-2">
                        {dayItems.map((item, index) => (
                            <TimelineItem
                                key={item.id}
                                item={item}
                                index={dayIndex * 3 + index} // staggered delay across days somewhat
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
