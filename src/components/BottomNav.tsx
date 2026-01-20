'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Map, Heart, User } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const BottomNav = () => {
    return (
        <div className="fixed bottom-6 left-6 right-6 z-50">
            <div className={twMerge(
                "max-w-md mx-auto bg-stone-900/90 backdrop-blur-xl text-stone-400 p-2 rounded-full shadow-2xl border border-stone-800",
                "flex justify-between items-center px-6"
            )}>
                <NavItem icon={Home} label="Home" isActive />
                <NavItem icon={Map} label="Map" />
                <NavItem icon={Heart} label="Saved" />
                <Link href="/edit" className="flex flex-col items-center p-3 hover:text-white transition-colors">
                    <User size={20} strokeWidth={1.5} />
                </Link>
            </div>
        </div>
    );
};

const NavItem = ({ icon: Icon, label, isActive }: { icon: any, label: string, isActive?: boolean }) => (
    <button className={clsx(
        "flex flex-col items-center p-3 transition-colors relative",
        isActive ? "text-white" : "hover:text-white"
    )}>
        <Icon size={20} strokeWidth={1.5} />
        {isActive && (
            <span className="absolute -bottom-1 w-1 h-1 bg-white rounded-full" />
        )}
    </button>
);
