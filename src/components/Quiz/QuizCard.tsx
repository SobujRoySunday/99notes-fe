'use client';

import { useState } from 'react';
import { Lock } from 'lucide-react';

export default function QuizCard() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <div className="max-w-sm mx-auto p-6 bg-white rounded-2xl border border-gray-200">
            <h2 className="text-xl font-bold text-center mb-4">Attempt Free Quiz</h2>
            <p className="font-medium mb-3">Question 1/5</p>
            <div className="space-y-2">
                {["Option 1", "Option 2", "Option 3", "Option 4"].map((option, index) => (
                    <button
                        key={index}
                        className="w-full p-3 border rounded-lg text-left hover:bg-gray-100 transition"
                        disabled={!isSignedIn}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <button className="w-full mt-4 bg-[#5E00FF] hover:bg-[#5E00FF]/80 p-3 flex items-center justify-center border rounded-lg text-white" onClick={() => setIsSignedIn(true)}>
                Sign In to Attempt
            </button>
            <button className="w-full mt-3 p-3 flex items-center justify-center border rounded-lg shadow-lg">
                <Lock className="w-4 h-4 mr-2" /> More Questions
            </button>
        </div>
    );
}
