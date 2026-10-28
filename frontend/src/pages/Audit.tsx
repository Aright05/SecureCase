import React, { useState } from 'react';
import {
  History,
  Search,
  Filter,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { AuditRecord } from '../types';

const sampleAuditLogs: AuditRecord[] = [
  {
    id: 'AUD-8801',
    timestamp: '2026-10-27 18:45:10 IST',
    action: 'HASH_VERIFICATION',
    actor: 'Forensic Officer A. Sen',
    role: 'Forensic Specialist',
    target: 'DOC-1001 (FIR_2026_091.pdf)',
    ipAddress: '192.168.1.45',
    status: 'SUCCESS',
  },
  {
    id: 'AUD-8800',
    timestamp: '2026-10-27 18:05:22 IST',
    action: 'EVIDENCE_INGEST',
    actor: 'IO S. Roy',
    role: 'Lead Investigator',
    target: 'DOC-1002 (Forensic_MemoryDump.pdf)',
    ipAddress: '192.168.1.12',
    status: 'SUCCESS',
  },
  {
    id: 'AUD-8799',
    timestamp: '2026-10-27 17:10:04 IST',
    action: 'DOSSIER_ACCESS',
    actor: 'Prosecutor K. Nair',
    role: 'Public Prosecutor',
    target: 'CR-2026-DEL-0891',
    ipAddress: '192.168.2.80',
    status: 'SUCCESS',
  },
  {
    id: 'AUD-8798',
    timestamp: '2026-10-27 15:20:18 IST',
    action: 'PERMISSION_AUDIT',
    actor: 'System Daemon',
    role: 'Security Service',
    target: 'RBAC Policy Check: Case Access',
    ipAddress: '127.0.0.1',
    status: 'SUCCESS',
  },
  {
    id: 'AUD-8797',
    timestamp: '2026-10-27 12:44:33 IST',
    action: 'EXPORT_RECORD',
    actor: 'Clerk P. Verma',
    role: 'Registry Clerk',
    target: 'Case Summary Export (CR-2026-MUM-0412)',
    ipAddress: '192.168.1.99',
    status: 'SUCCESS',
  },
];

export const Audit: React.FC = () => {
  const [filterAction, setFilterAction] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLogs = sampleAuditLogs.filter((log) => {
    const matchesAction = filterAction === 'ALL' || log.action === filterAction;
    const matchesSearch =
      log.actor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesAction && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Audit Header */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 border border-teal-500/30">
            <History className="h-5 w-5 stroke-[2.2]" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Chain-of-Custody & Granular Audit Trail</h2>
            <p className="text-xs text-slate-500">
              Chronological, non-repudiable transaction log tracking all evidentiary access, verification, and administrative actions.
            </p>
          </div>
        </div>

        {/* Technical Notice Alert */}
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-700">
          <div className="flex items-start gap-2.5">
            <Info className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-slate-900 font-semibold">
                Prototype Evidence Integrity Notice (Section 11.3):
              </strong>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                In local prototype development, relational audit tables capture timestamps, actors, and operations.
                True decentralized immutability is planned for subsequent integration phases via consortium blockchain anchoring.
              </p>
            </div>
          </div>
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
            placeholder="Search by actor, target file, or event ID..."
            className="w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-teal-500 focus:outline-none shadow-xs"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <Filter className="h-4 w-4 text-slate-400 shrink-0 hidden sm:block" />
          {['ALL', 'HASH_VERIFICATION', 'EVIDENCE_INGEST', 'DOSSIER_ACCESS', 'EXPORT_RECORD'].map((act) => (
            <button
              key={act}
              onClick={() => setFilterAction(act)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                filterAction === act
                  ? 'bg-navy-900 text-teal-300 font-semibold shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {act.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Audit Log Table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Event ID</th>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4">Action Type</th>
                <th className="py-3 px-4">Operating Actor</th>
                <th className="py-3 px-4">Target Resource</th>
                <th className="py-3 px-4">IP / Origin</th>
                <th className="py-3 px-4 text-right">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/80 transition-colors font-mono">
                  <td className="py-3.5 px-4 font-bold text-slate-900">{log.id}</td>
                  <td className="py-3.5 px-4 text-slate-500 text-[11px] font-sans">{log.timestamp}</td>
                  <td className="py-3.5 px-4 font-sans">
                    <span className="rounded bg-teal-50 px-2 py-0.5 text-[10px] font-semibold text-teal-800 border border-teal-200">
                      {log.action}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-sans">
                    <div className="font-semibold text-slate-900">{log.actor}</div>
                    <span className="text-[10px] text-slate-400">{log.role}</span>
                  </td>
                  <td className="py-3.5 px-4 font-sans text-slate-700">{log.target}</td>
                  <td className="py-3.5 px-4 text-slate-500 text-[11px]">{log.ipAddress}</td>
                  <td className="py-3.5 px-4 text-right font-sans">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="h-3 w-3" />
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-slate-100 px-4 py-3 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500">
          <span>Displaying {filteredLogs.length} simulated audit events</span>
          <span className="font-mono text-[11px] text-slate-400">Append-Only Event Ledger Architecture</span>
        </div>
      </div>
    </div>
  );
};
