import React from 'react';
import { Coffee } from 'lucide-react';

export default function DonationCTA() {
  const upiDeepLink =
    'upi://pay?pa=flamesblue@upi&pn=PrivyRooms&am=100&cu=INR&tn=Thanks%20for%20supporting%20privacy-first%20tools';

  return (
    <section id="donate" className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-900/40 via-black to-black p-8 overflow-hidden">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-500/30 blur-3xl" />
        <div className="relative z-10 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-semibold">Buy us a coffee ☕</h3>
            <p className="mt-2 text-white/80 max-w-prose">If you enjoy PrivyRooms, consider a small tip to help keep the lights on. UPI works with BHIM, Google Pay, and Paytm. Thank you for supporting independent, privacy‑first software.</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={upiDeepLink}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-black font-medium hover:bg-amber-400 transition shadow-lg"
              >
                <Coffee className="h-5 w-5" />
                Pay via UPI
              </a>
              <a
                href="https://upi.me/pay?pa=flamesblue@upi&pn=PrivyRooms"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition"
              >
                Alternate link
              </a>
            </div>
          </div>
          <div className="justify-self-end">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 w-full max-w-xs text-center">
              <p className="text-white/80 text-sm">Scan in your UPI app</p>
              <div className="mt-3 mx-auto grid grid-cols-5 gap-1 bg-white p-3 rounded-md w-48 h-48">
                {/* Minimalistic QR-like pattern for demo (not a real code) */}
                {Array.from({ length: 25 }).map((_, i) => (
                  <span
                    key={i}
                    className={`block h-2.5 w-2.5 ${((i*7)%5===0 || (i%7)===0) ? 'bg-black' : 'bg-white'}`}
                  />
                ))}
              </div>
              <p className="mt-3 text-xs text-white/60">This is a decorative preview. Use the UPI buttons to pay.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
