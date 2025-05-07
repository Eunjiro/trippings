'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { quicksand } from "@/ui/fonts";
import LoginModal from '@/ui/components/LoginModal';

const Navbar: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <nav className="bg-white shadow-md flex items-center justify-between px-4 py-2">
            <h1 className={`${quicksand.className} text-3xl font-bold text-center py-2 text-sky-500`}>Trippings</h1>
            
            <button
                onClick={() => setShowModal(true)}
                className="bg-transparent text-gray-400 py-2 rounded-md text-xl"
            >
                Login
            </button>

            <LoginModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </nav>
    );
};

export default Navbar;