'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, Save } from 'lucide-react';
import itineraryData from '@/data/itinerary.json';

export default function EditPage() {
    const [jsonContent, setJsonContent] = useState('');

    useEffect(() => {
        setJsonContent(JSON.stringify(itineraryData, null, 2));
    }, []);

    const handleSave = () => {
        // In a real app, this would POST to an API
        // For MVP, we'll just alert the user or maybe save to localStorage if we wanted persistence across reloads (but the requirement says "edit the JSON data text directly")
        // Since we can't write to disk from client, we will simulate it.
        alert("In a real app, this would save to the server. For this MVP, changes are local only.");
        console.log("Saved JSON:", jsonContent);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <header className="flex justify-between items-center mb-6">
                <Link href="/" className="flex items-center text-blue-600 font-medium">
                    <ChevronLeft size={20} />
                    Back
                </Link>
                <h1 className="text-xl font-bold">Edit Itinerary</h1>
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors"
                >
                    <Save size={16} />
                    Save
                </button>
            </header>

            <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100 h-[calc(100vh-140px)]">
                <textarea
                    value={jsonContent}
                    onChange={(e) => setJsonContent(e.target.value)}
                    className="w-full h-full font-mono text-sm text-gray-800 outline-none resize-none"
                    spellCheck={false}
                />
            </div>
            <p className="text-center text-gray-400 text-xs mt-4">Pro Tip: Validate your JSON before saving.</p>
        </div>
    );
}
