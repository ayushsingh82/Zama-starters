'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="border-b bg-[#0A0A0A] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-medium text-white"
          >
            Zama-starters
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
