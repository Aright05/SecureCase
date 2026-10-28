import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Briefcase,
  ShieldCheck,
  History,
  ArrowUpRight,
  Database,
  Hash,
  Clock,
  Layers,
  AlertCircle,
  FileCode,
} from 'lucide-react';

const sampleMetrics = [
  {
    title: 'Ingested Evidence Files',
    value: '128',
    meta: 'Sample Ingestion Counter',
    subtext: 'Private storage partitioned',
    icon: FileText,
    accent: 'text-teal-600 bg-teal-50 border-teal-200',
  },
  {
    title: 'Active Case Dossiers',
    value: '18',
    meta: 'Fictional Case Count',
    subtext: 'Across 4 test divisions',
    icon: Briefcase,
    accent: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    title: 'Integrity Verification Rate',
    value: '100%',
    meta: 'Simulated Checksums',
    subtext: 'SHA-256 byte-level matching',
    icon: ShieldCheck,
    accent: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Audit Trail Records',
    value: '842',
    meta: 'Mock Event Ledger',
    subtext: 'Chronological operations',
    icon: History,
    accent: 'text-purple-600 bg-purple-50 border-purple-200',
  },
];

const sampleActivities = [
  {
    id: 'ACT-9081',
    caseId: 'CR-2026-DEL-0891',
    title: 'Forensic Ballistics Report Ingested',
    type: 'Ingestion',
    time: '14 minutes ago',
    hash: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4',
    operator: 'IO S. Roy (Demo)',
    status: 'Verified',
  },
  {
    id: 'ACT-9080',
    caseId: 'CR-2026-BLR-0245',
    title: 'On-Demand Checksum Verification Executed',
    type: 'Verification',
    time: '42 minutes ago',
    hash: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    operator: 'Forensic Lab Unit B',
    status: 'Verified',
  },
  {
    id: 'ACT-9079',
    caseId: 'CR-2026-MUM-0112',
    title: 'Digital Witness Statement Metadata Parsed',
    type: 'Classification',
    time: '2 hours ago',
    hash: '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
    operator: 'Prosecution Assistant',
    status: 'Pending Review',
  },
  {
    id: 'ACT-9078',
    caseId: 'CR-2026-KOL-0043',
    title: 'Court Order Filing Amendment Version Created',
    type: 'Versioning',
    time: '5 hours ago',
    hash: 'ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d',
    operator: 'Registry Clerk',
    status: 'Verified',
  },
];

const quickActions = [
  {
    title: 'Case Dossiers',
    desc: 'Review investigation repositories and assigned personnel.',
    path: '/cases',
    icon: Briefcase,
    badge: '18 Active',
  },
  {
    title: 'Evidence Vault',
    desc: 'Inspect isolated document storage and SHA-256 fingerprints.',
    path: '/documents',
    icon: FileText,
    badge: '128 Files',
  },
  {
    title: 'Integrity Verifier',
    desc: 'Recalculate hashes to detect byte-level file tampering.',
    path: '/verification',
    icon: ShieldCheck,
    badge: 'SHA-256',
  },
  {
    title: 'Audit Trail',
    desc: 'Inspect chronological chain-of-custody event logs.',
    path: '/audit',
    icon: History,
    badge: '842 Events',
  },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Explicit Prototype & Demo Data Banner */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-subtle flex items-start gap-3.5">
        <div className="rounded-lg bg-teal-500/10 p-2 text-teal-600 border border-teal-500/20">
          <AlertCircle className="h-5 w-5" />
        </div>
        <div className="flex-1 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-900 text-sm">Stage 2 Foundation Mode</span>
            <span className="rounded bg-teal-100 px-2 py-0.5 text-[10px] font-semibold text-teal-800">
              Fictional Demo Data
            </span>
          </div>
          <p className="mt-1 leading-relaxed text-slate-600">
            This dashboard displays synthetic metrics and simulated activity for Hackathon evaluation.
            Full authentication, OCR extraction pipelines, and automated evidence uploads will be introduced in subsequent stages.
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sampleMetrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white p-5 shadow-card hover:border-slate-300 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.title}</span>
                <div className={`rounded-lg border p-2 ${item.accent}`}>
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight text-slate-900">{item.value}</span>
                <span className="text-[11px] font-medium text-slate-400">({item.meta})</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">{item.subtext}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Access Tiles */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
          <Layers className="h-4 w-4 text-teal-600" />
          Prototype Functional Modules
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <Link
                key={i}
                to={action.path}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 shadow-subtle hover:border-teal-500/50 hover:shadow-card transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="rounded-lg bg-navy-900 p-2 text-teal-400 group-hover:bg-navy-800 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                      {action.badge}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm group-hover:text-teal-700 transition-colors">
                    {action.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">{action.desc}</p>
                </div>
                <div className="mt-4 flex items-center text-xs font-semibold text-teal-600 group-hover:translate-x-0.5 transition-transform">
                  <span>Open Module</span>
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Grid: Recent Activity Feed & Architecture Summary */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Activity Table (2 columns on lg) */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-card lg:col-span-2 overflow-hidden">
          <div className="border-b border-slate-200/80 px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Recent Forensic Activity (Fictional Stream)</h3>
              <p className="text-xs text-slate-500">Simulated chronological event intake for demonstration</p>
            </div>
            <Link to="/audit" className="text-xs font-medium text-teal-600 hover:text-teal-700">
              View all audit logs →
            </Link>
          </div>

          <div className="divide-y divide-slate-100 overflow-x-auto">
            {sampleActivities.map((act) => (
              <div key={act.id} className="p-4 hover:bg-slate-50/70 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-slate-800">{act.caseId}</span>
                    <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
                      {act.type}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="h-3 w-3" />
                    {act.time}
                  </span>
                </div>
                <div className="text-sm font-medium text-slate-900">{act.title}</div>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 truncate max-w-md">
                    <Hash className="h-3 w-3 text-teal-600 shrink-0" />
                    <span className="truncate">{act.hash}</span>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                    {act.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture Info Card */}
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
            <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
              <Database className="h-4 w-4 text-teal-600" />
              Storage & Security Foundation
            </h3>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Stage 2 configurations initialized according to project specification:
            </p>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 p-2.5">
                <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-800">Database Engine:</strong>
                  <p className="text-slate-600 mt-0.5">SQLite local database with zero external server dependencies.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 p-2.5">
                <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-800">Evidence Isolation:</strong>
                  <p className="text-slate-600 mt-0.5">Private storage configured at <code className="font-mono text-[11px] bg-slate-200/70 px-1 rounded">storage/documents/</code> outside web paths.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 p-2.5">
                <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-800">FastAPI Health API:</strong>
                  <p className="text-slate-600 mt-0.5">Mounted at <code className="font-mono text-[11px] bg-slate-200/70 px-1 rounded">GET /api/health</code> with CORS configured.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-teal-200/80 bg-teal-50/50 p-5 shadow-subtle">
            <div className="flex items-center gap-2 text-teal-900 font-semibold text-xs mb-1">
              <FileCode className="h-4 w-4 text-teal-600" />
              <span>SIH 2026 Core Workflow</span>
            </div>
            <p className="text-[11px] text-teal-800 leading-relaxed">
              SecureCase enforces cryptographic SHA-256 hashing upon ingestion to guarantee tamper detection across FIRs, witness statements, and forensic reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
