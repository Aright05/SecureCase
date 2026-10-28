import React, { useState } from 'react';
import {
  Briefcase,
  Search,
  Filter,
  Plus,
  FolderOpen,
  Calendar,
  User,
  FileText,
  AlertCircle,
  Tag,
} from 'lucide-react';
import { CaseDossier } from '../types';

const sampleCases: CaseDossier[] = [
  {
    id: 'CR-2026-DEL-0891',
    title: 'Cyber Heist & Corporate Exfiltration Probe',
    category: 'Cybercrime',
    leadInvestigator: 'Inspector R. Verma',
    status: 'Active',
    documentCount: 14,
    lastUpdated: '2026-10-27 18:30 IST',
  },
  {
    id: 'CR-2026-MUM-0412',
    title: 'State Financial Ledger Forgery & Embezzlement',
    category: 'Financial Fraud',
    leadInvestigator: 'IO S. Roy',
    status: 'Under Investigation',
    documentCount: 22,
    lastUpdated: '2026-10-26 14:15 IST',
  },
  {
    id: 'CR-2026-BLR-0245',
    title: 'Digital Land Registry Certificate Tampering',
    category: 'Document Tampering',
    leadInvestigator: 'Officer A. Sen',
    status: 'Court Ready',
    documentCount: 9,
    lastUpdated: '2026-10-25 11:00 IST',
  },
  {
    id: 'CR-2026-HYD-0199',
    title: 'Identity Spoofing & Phishing Infrastructure',
    category: 'Cybercrime',
    leadInvestigator: 'Forensic Lead N. Iyer',
    status: 'Active',
    documentCount: 7,
    lastUpdated: '2026-10-24 16:45 IST',
  },
];

export const Cases: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');

  const filteredCases = sampleCases.filter((c) => {
    const matchesSearch =
      c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.leadInvestigator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'ALL' || c.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Stage 2 Module Header & Banner */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600">
                <Briefcase className="h-4 w-4" />
              </span>
              <h2 className="text-lg font-bold text-slate-900">Case Dossiers & Evidence Repositories</h2>
            </div>
            <p className="mt-1 text-xs text-slate-500 max-w-2xl leading-relaxed">
              In SecureCase, all legal documentation and digital evidence files are strictly encapsulated within distinct Case Dossiers.
              Full database persistence and case dossier creation will be enabled in subsequent stages.
            </p>
          </div>

          <button
            type="button"
            disabled
            title="Case creation active in Stage 3"
            className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-400 border border-slate-200 cursor-not-allowed"
          >
            <Plus className="h-4 w-4" />
            <span>Create Dossier (Stage 3)</span>
          </button>
        </div>

        {/* Fictional Data Note */}
        <div className="mt-4 flex items-center gap-2 text-[11px] text-teal-700 bg-teal-50/80 px-3 py-1.5 rounded-lg border border-teal-200/60">
          <AlertCircle className="h-3.5 w-3.5 text-teal-600 shrink-0" />
          <span>Fictional Demonstration Dossiers: Showcases layout, categorization, and investigator tracking.</span>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Case ID, title, or investigator..."
            className="w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-teal-500 focus:outline-none shadow-xs"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <Filter className="h-4 w-4 text-slate-400 shrink-0 hidden sm:block" />
          {['ALL', 'Active', 'Under Investigation', 'Court Ready'].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                selectedStatus === st
                  ? 'bg-navy-900 text-teal-300 font-semibold shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Case Dossiers Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filteredCases.map((c) => (
          <div
            key={c.id}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-card hover:border-teal-500/50 hover:shadow-elevated transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-navy-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    {c.id}
                  </span>
                  <span className="flex items-center gap-1 rounded bg-teal-50 px-2 py-0.5 text-[10px] font-semibold text-teal-800 border border-teal-200/70">
                    <Tag className="h-2.5 w-2.5 text-teal-600" />
                    {c.category}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {c.title}
                </h3>
              </div>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-tight border ${
                  c.status === 'Court Ready'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : c.status === 'Active'
                    ? 'bg-teal-50 text-teal-700 border-teal-200'
                    : 'bg-blue-50 text-blue-700 border-blue-200'
                }`}
              >
                {c.status}
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-slate-400" />
                <span className="truncate">{c.leadInvestigator}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-slate-400" />
                <span>{c.documentCount} Evidence Items</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 text-[11px] text-slate-400">
                <Calendar className="h-3.5 w-3.5" />
                <span>Last Updated: {c.lastUpdated}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Storage Partition: Assigned</span>
              <button
                type="button"
                className="flex items-center gap-1 text-xs font-semibold text-teal-600 group-hover:text-teal-700"
              >
                <FolderOpen className="h-3.5 w-3.5" />
                <span>Explore Dossier</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
