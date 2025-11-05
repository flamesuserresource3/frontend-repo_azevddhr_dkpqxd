import React from 'react';
import { Shield, User, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 p-[2px]">
            <div className="h-full w-full rounded-[6px] bg-black grid place-items-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
          </div>
          <span className="text-white text-lg font-semibold tracking-tight">PrivyRooms</span>
          <span className="ml-2 rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-300 border border-green-500/20">Secure</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#rooms" className="hover:text-white transition">Rooms</a>
          <a href="#security" className="hover:text-white transition">Privacy</a>
          <a href="#donate" className="hover:text-white transition">Donate</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10 transition">
            <LogIn className="h-4 w-4" />
            <span>Sign in</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-3 py-2 text-sm text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">
            <User className="h-4 w-4" />
            <span>Create account</span>
          </button>
        </div>
      </div>
    </header>
  );
}
