import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { AlertCircle } from 'lucide-react';

const routeMetadata: Record<string, { title: string; subtitle: string }> = {
  '/dashboard': {
    title: 'Operations Dashboard',
    subtitle: 'Investigation overview, evidence ingestion counters, and system metrics',
  },
  '/cases': {
    title: 'Investigation Case Dossiers',
    subtitle: 'Case repositories, assigned investigators, and evidence status tracking',
  },
  '/documents': {
    title: 'Digital Evidence Vault',
    subtitle: 'Private document repository and cryptographic fingerprint catalog',
  },
  '/verification': {
    title: 'SHA-256 Integrity Verification',
    subtitle: 'Tamper detection engine and byte-level cryptographic validation',
  },
  '/audit': {
    title: 'Chain-of-Custody Audit Trail',
    subtitle: 'Immutable chronological log of document operations and access events',
  },
  '/login': {
    title: 'Authentication Gateway',
    subtitle: 'Role-based access portal (Stage 3 Roadmap)',
  },
};

export const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const currentMeta = routeMetadata[location.pathname] || {
    title: 'SecureCase Workspace',
    subtitle: 'AI-Powered Secure Digital Document & Evidence Management',
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 font-sans">
      {/* Dark Navy Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Workspace */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Foundation Notice Strip */}
        <div className="bg-slate-900 text-slate-300 px-4 py-1.5 text-[11px] flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-3.5 w-3.5 text-teal-400 shrink-0" />
            <span>
              <strong>SecureCase Stage 2:</strong> Architectural foundation initialized. Data presented is strictly synthetic for demonstration.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[10px] text-slate-400">
            <span>FastAPI Backend + SQLite Storage</span>
            <span>•</span>
            <span>SHA-256 Checksums</span>
            <span>•</span>
            <span className="text-teal-400 font-mono">SIH26190</span>
          </div>
        </div>

        {/* Top Navigation Bar */}
        <TopBar
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          title={currentMeta.title}
          subtitle={currentMeta.subtitle}
        />

        {/* Scrollable Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
