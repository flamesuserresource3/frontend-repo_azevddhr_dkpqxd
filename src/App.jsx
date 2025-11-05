import React from 'react';
import Navbar from './components/Navbar';
import FeatureShowcase from './components/FeatureShowcase';
import AuthSection from './components/AuthSection';
import DonationCTA from './components/DonationCTA';
import { Rocket } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b12] to-black text-white">
      <Navbar />

      <main>
        <section className="relative mx-auto max-w-7xl px-4 pt-10 pb-14">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> Privacy-first collaboration
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
                Create private rooms for fast sessions or long-term groups
              </h1>
              <p className="mt-4 text-white/80 max-w-prose">
                Ephemeral rooms power video, screen sharing, chat, polls and synced Spotify. Persistent rooms keep your
                conversations and documents organized—without always being on camera.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2 font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition"
                >
                  <Rocket className="h-5 w-5" />
                  Start a room
                </a>
                <a
                  href="#security"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
                >
                  Learn about privacy
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 h-40 rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600" />
                  <div className="h-40 rounded-xl border border-white/10 bg-black/40" />
                  <div className="h-24 rounded-xl border border-white/10 bg-black/40" />
                  <div className="col-span-2 h-24 rounded-xl border border-white/10 bg-black/40" />
                </div>
                <p className="mt-3 text-center text-xs text-white/60">Visual preview • No live data yet</p>
              </div>
            </div>
          </div>
        </section>

        <FeatureShowcase />
        <AuthSection />
        <DonationCTA />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        <p>
          © {new Date().getFullYear()} PrivyRooms • Built for secure, seamless collaboration. Not affiliated with Spotify.
        </p>
      </footer>
    </div>
  );
}
