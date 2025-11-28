import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow mb-6">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="text-xl font-bold">
          LiveHindustan Clone
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/?category=National" className="hover:text-blue-600">National</Link>
          <Link href="/?category=Business" className="hover:text-blue-600">Business</Link>
          <Link href="/?category=Sports" className="hover:text-blue-600">Sports</Link>
          <Link href="/?category=Lifestyle" className="hover:text-blue-600">Lifestyle</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <Link href="/" className="block">Home</Link>
          <Link href="/?category=National" className="block">National</Link>
          <Link href="/?category=Business" className="block">Business</Link>
          <Link href="/?category=Sports" className="block">Sports</Link>
          <Link href="/?category=Lifestyle" className="block">Lifestyle</Link>
        </div>
      )}
    </nav>
  );
}
