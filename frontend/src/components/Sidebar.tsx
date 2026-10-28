import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  ShieldCheck,
  History,
  Lock,
  Shield,
  Layers,
  ExternalLink,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/cases', label: 'Investigation Cases', icon: Briefcase },
  { path: '/documents', label: 'Document Vault', icon: FileText },
  { path: '/verification', label: 'Integrity Verification', icon: ShieldCheck },
  { path: '/audit', label: 'Audit Trail', icon: History },
  { path: '/login', label: 'Auth Gateway (Stage 3)', icon: Lock },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-72 flex-col bg-navy-900 border-r border-navy-800 text-slate-200 transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="flex h-20 items-center justify-between border-b border-navy-800 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
              <Shield className="h-6 w-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white">SecureCase</span>
                <span className="rounded bg-teal-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-teal-300">
                  v0.1
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-tight">SIH26190 • Algo_rift</p>
            </div>
          </div>
        </div>

        {/* System Sub-Tag */}
        <div className="px-6 py-3 bg-navy-950/60 border-b border-navy-800 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5 font-medium">
            <Layers className="h-3.5 w-3.5 text-teal-400" />
            Legal-Tech & Forensics
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-navy-800 text-slate-300">
            Stage 2
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-1.5 px-4 py-5 overflow-y-auto">
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Investigation Operations
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `group flex items-center gap-3.5 rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-navy-800 text-teal-300 shadow-sm border-l-4 border-teal-500 pl-2.5 font-semibold'
                      : 'text-slate-300 hover:bg-navy-850 hover:text-white'
                  }`
                }
              >
                <Icon className="h-4 w-4 shrink-0 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all text-slate-400 group-hover:text-teal-400" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Technical Architecture Badge */}
        <div className="p-4 border-t border-navy-800/80 bg-navy-950/40">
          <div className="rounded-lg border border-navy-700/60 bg-navy-850 p-3 text-xs">
            <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
              <span>Prototype Scope</span>
              <span className="text-teal-400 font-mono text-[11px]">Phase 2</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              FastAPI + SQLite + React TS foundation with SHA-256 evidence architecture.
            </p>
            <div className="mt-2.5 pt-2 border-t border-navy-700/60 flex items-center justify-between text-[11px] text-slate-400">
              <span>Theme: Blockchain & Cyber</span>
              <a
                href="https://github.com/Aright05/SecureCase"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-teal-400 hover:text-teal-300"
              >
                Repo <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
