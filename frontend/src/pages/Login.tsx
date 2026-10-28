import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'investigator' | 'prosecutor' | 'forensics' | 'admin'>('investigator');

  const handleDemoAccess = (e: React.FormEvent) => {
    e.preventDefault();
    // Stage 2: Direct bypass to prototype dashboard without fake auth token claims
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center py-6">
      <div className="w-full max-w-lg space-y-6">
        {/* Stage Notice Banner */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900 shadow-xs">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Authentication Gateway — Prototype Status (Stage 2)</p>
              <p className="mt-1 text-amber-800 leading-relaxed">
                Authentication, password hashing, and JWT token lifecycles will be implemented in Stage 3.
                No credentials are processed or stored in this development stage. You can access the prototype dashboard directly below.
              </p>
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-elevated">
          {/* Card Header */}
          <div className="bg-navy-900 px-8 py-7 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-400">
                <Shield className="h-6 w-6 stroke-[2.2]" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">SecureCase Sign-In</h2>
                <p className="text-xs text-slate-300 font-mono">Digital Evidence Custody Portal</p>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <form onSubmit={handleDemoAccess} className="p-8 space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                Investigative Role (Planned RBAC)
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'investigator', label: 'Police Investigator' },
                  { id: 'prosecutor', label: 'Public Prosecutor' },
                  { id: 'forensics', label: 'Forensic Specialist' },
                  { id: 'admin', label: 'System Admin' },
                ].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRole(r.id as any)}
                    className={`rounded-lg border px-3 py-2 text-left font-medium transition-colors ${
                      role === r.id
                        ? 'border-teal-600 bg-teal-50 text-teal-900 font-semibold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                Official Identifier / Badge ID
              </label>
              <input
                type="text"
                disabled
                value="OFFICER-DL-2026-904"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-mono text-slate-600 cursor-not-allowed"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">Pre-filled for Stage 2 prototype evaluation</span>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                Passphrase (Placeholder)
              </label>
              <div className="relative">
                <input
                  type="password"
                  disabled
                  value="••••••••••••••••"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-mono text-slate-600 cursor-not-allowed"
                />
                <Lock className="absolute right-3.5 top-3 h-4 w-4 text-slate-400" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-navy-850 active:scale-[0.99] transition-all"
            >
              <span>Access Prototype Dashboard</span>
              <ArrowRight className="h-4 w-4 text-teal-400" />
            </button>
          </form>

          {/* Footer Info */}
          <div className="border-t border-slate-100 bg-slate-50/80 px-8 py-3.5 text-xs text-slate-500 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-teal-600" />
              <span>SIH Problem Statement SIH26190</span>
            </span>
            <span className="font-mono text-[11px] text-slate-400">Team: Algo_rift</span>
          </div>
        </div>
      </div>
    </div>
  );
};
