import React, { useState } from 'react';
import { Mail, Lock, UserPlus, Image as ImageIcon, KeyRound, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function AuthSection() {
  const [mode, setMode] = useState('register');
  const [username, setUsername] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://api.example.com';

  const onSubmit = (e) => {
    e.preventDefault();
    // No API calls yet: backend endpoints will be wired next iteration.
    if (mode === 'register') {
      // Suggest username variations locally without leaking whether taken
      const base = username.replace(/[^a-zA-Z0-9_]/g, '').slice(0, 18) || 'user';
      const variants = [
        `${base}${Math.floor(100 + Math.random() * 900)}`,
        `${base}_io`,
        `${base}_hq`,
        `${base}_${new Date().getFullYear()}`,
      ];
      setSuggestions(variants);
      alert('Account creation will be enabled after we connect the secure backend.');
    } else {
      alert('Sign-in will be enabled after we connect the secure backend.');
    }
  };

  return (
    <section id="security" className="relative mx-auto max-w-7xl px-4 py-14">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-xl font-semibold">{mode === 'register' ? 'Create your account' : 'Welcome back'}</h3>
            <div className="inline-flex rounded-lg bg-white/10 p-1">
              <button
                onClick={() => setMode('register')}
                className={`px-3 py-1.5 text-sm rounded-md ${mode==='register' ? 'bg-white text-black' : 'text-white/80'}`}
              >Register</button>
              <button
                onClick={() => setMode('login')}
                className={`px-3 py-1.5 text-sm rounded-md ${mode==='login' ? 'bg-white text-black' : 'text-white/80'}`}
              >Sign in</button>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            {mode === 'register' && (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-white/80 text-sm flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5" />
                <p>We enforce unique usernames, 2FA, and encrypted storage. Profile photos are optional and can be updated anytime.</p>
              </div>
            )}

            <div className="grid gap-3 md:grid-cols-2">
              <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white/90">
                <UserPlus className="h-4 w-4 text-white/70" />
                <input
                  type="text"
                  required
                  minLength={3}
                  maxLength={20}
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-transparent outline-none placeholder:text-white/40"
                />
              </label>
              <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white/90">
                <Mail className="h-4 w-4 text-white/70" />
                <input type="email" required placeholder="Email" className="w-full bg-transparent outline-none placeholder:text-white/40" />
              </label>
            </div>

            {mode === 'register' && (
              <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white/90">
                <ImageIcon className="h-4 w-4 text-white/70" />
                <input type="file" accept="image/*" className="w-full text-white/60" />
              </label>
            )}

            <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white/90">
              <Lock className="h-4 w-4 text-white/70" />
              <input type="password" required placeholder={mode==='register' ? 'Create password' : 'Password'} className="w-full bg-transparent outline-none placeholder:text-white/40" />
            </label>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 mb-2 text-white">
                <KeyRound className="h-4 w-4" />
                <span className="text-sm font-medium">Multi‑factor authentication</span>
              </div>
              <p className="text-xs text-white/70">Choose your preferred second factor. You can switch later in settings.</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white/90">
                  <input type="radio" name="mfa" defaultChecked /> Email one‑time code
                </label>
                <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white/90">
                  <input type="radio" name="mfa" /> Authenticator app (TOTP)
                </label>
              </div>
            </div>

            {suggestions.length > 0 && (
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-amber-100 text-sm flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 mt-0.5" />
                <div>
                  <p className="font-medium">If that username is taken, try one of these private suggestions:</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {suggestions.map((s) => (
                      <span key={s} className="rounded-full bg-white/10 px-2 py-1 text-xs">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2.5 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">
              {mode === 'register' ? 'Create account securely' : 'Sign in securely'}
            </button>
          </form>
          <p className="mt-3 text-xs text-white/60">Backend URL configured as: <span className="text-white/90">{backendUrl}</span></p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-black p-6">
          <h4 className="text-white text-lg font-semibold mb-3">Privacy & security highlights</h4>
          <ul className="space-y-3 text-white/80 text-sm">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /><span>All traffic served over HTTPS. Sensitive data is encrypted at rest using industry best practices.</span></li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /><span>Unique room links with optional passwords. Guests can join only with the link and your approval.</span></li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /><span>Role-based access controls for hosts, co-hosts, and participants.</span></li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" /><span>We never leak which usernames exist. Alternatives are suggested locally on device.</span></li>
          </ul>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            <p><span className="font-medium text-white">Tip:</span> Create “ephemeral” rooms for quick sessions with video/audio and Spotify. Use “persistent” rooms for ongoing text discussions and shared documents.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
