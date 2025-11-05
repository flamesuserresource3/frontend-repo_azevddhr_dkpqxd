import React from 'react';
import { Video, Mic, ScreenShare, MessageSquare, Music, FileText, Lock, Users, Sparkles, ShieldCheck } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon, accent }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10">
    <div className={`absolute -top-8 -right-8 h-24 w-24 rounded-full blur-2xl opacity-30 ${accent}`} />
    <div className="relative z-10 flex items-center gap-3">
      <div className="rounded-lg bg-white/10 p-2 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mt-1">{description}</p>
      </div>
    </div>
  </div>
);

export default function FeatureShowcase() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-14">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/60">What you can do</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">Ephemeral sessions and persistent groups</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Launch a quick, private room for a live session or keep the conversation going long-term with persistent spaces for your team or friends.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
          <ShieldCheck className="h-4 w-4" />
          <span className="text-sm">E2E mindset • Privacy-first</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Video, audio & screenshare"
          description="Spin up ephemeral rooms for face-to-face calls, pair programming, or presentations—no installs required."
          icon={Video}
          accent="from-indigo-500 to-purple-500 bg-gradient-to-r"
        />
        <FeatureCard
          title="Real-time chat & polls"
          description="Discuss, decide, and react together. Create polls right in chat to make group choices fast."
          icon={MessageSquare}
          accent="from-fuchsia-500 to-pink-500 bg-gradient-to-r"
        />
        <FeatureCard
          title="Synced Spotify playback"
          description="Bring the vibe. Hosts with Premium can keep everyone in sync with shared controls."
          icon={Music}
          accent="from-emerald-500 to-teal-500 bg-gradient-to-r"
        />
        <FeatureCard
          title="Persistent notes & docs"
          description="Long-term rooms keep your threads, notes, and shared files neatly organized."
          icon={FileText}
          accent="from-amber-500 to-orange-500 bg-gradient-to-r"
        />
        <FeatureCard
          title="Private by default"
          description="Every room has a unique URL and optional password. Your data is encrypted in transit and at rest."
          icon={Lock}
          accent="from-sky-500 to-cyan-500 bg-gradient-to-r"
        />
        <FeatureCard
          title="Invite your crew"
          description="Share a simple link. Control who joins and what they can do with role-based permissions."
          icon={Users}
          accent="from-violet-500 to-indigo-500 bg-gradient-to-r"
        />
      </div>

      <div id="rooms" className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
            <Sparkles className="h-4 w-4" /> Ephemeral rooms
          </div>
          <ul className="space-y-2 text-white/80 text-sm list-disc pl-5">
            <li>Video/audio chat and screen sharing</li>
            <li>Live text chat with reactions</li>
            <li>Quick polls to decide together</li>
            <li>Synced Spotify playback (Premium required)</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            <Sparkles className="h-4 w-4" /> Persistent rooms
          </div>
          <ul className="space-y-2 text-white/80 text-sm list-disc pl-5">
            <li>Text chat with searchable history</li>
            <li>Shared notes and documents</li>
            <li>No video/audio playback for distraction-free focus</li>
            <li>Invite-only with granular permissions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
