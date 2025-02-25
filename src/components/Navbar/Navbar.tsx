"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LOGO_IMG, NAV_LINKS, Menu } from "@/constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full border-b bg-white">
            <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-xl font-bold flex items-center">
                        <Image src={LOGO_IMG} alt="Logo" width={86} height={86} />
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-gray-500 text-xs font-medium">
                    {NAV_LINKS.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-black">{link.name}</Link>
                    ))}
                </div>

                {/* Sign-in / Sign-up */}
                <div className="hidden md:flex space-x-4 items-center text-sm">
                    <Link href="/signin" className="text-gray-500 hover:text-black">Sign In</Link>
                    <Link href="/signup" className="px-4 py-2 bg-[#3328BF] text-white rounded-md hover:bg-[#3328BF]/80">
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden border-t bg-white py-3">
                    <div className="flex flex-col items-center space-y-4 text-xs text-gray-500">
                        {NAV_LINKS.map((link) => (
                            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>{link.name}</Link>
                        ))}
                        <Link href="/signin" onClick={() => setIsOpen(false)}>Sign In</Link>
                        <Link href="/signup" className="px-4 py-2 bg-[#3328BF] text-white rounded-md" onClick={() => setIsOpen(false)}>
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
