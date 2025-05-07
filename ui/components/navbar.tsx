'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { quicksand } from "@/ui/fonts";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useAuth } from '@clerk/nextjs';

const Navbar: React.FC = () => {
    const { isSignedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isSignedIn) {
            router.push('/dashboard'); // Redirect to the dashboard after login
        }
    }, [isSignedIn, router]);

    return (
        <nav className="bg-white shadow-md flex items-center justify-between px-4 py-2">
            <h1 className={`${quicksand.className} text-3xl font-bold text-center py-2 text-sky-500`}>Trippings</h1>
            
            <SignedOut>
                <SignInButton mode="modal">
                  <button>Login</button>
                </SignInButton>
            </SignedOut>
        </nav>
    );
};

export default Navbar;