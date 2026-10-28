import React, { useState } from 'react';
import {
  FileText,
  Search,
  Upload,
  Hash,
  CheckCircle2,
  Filter,
  FolderLock,
  AlertTriangle,
} from 'lucide-react';
import { IngestedDocument } from '../types';

const sampleDocuments: IngestedDocument[] = [
  {
    id: 'DOC-1001',
    fileName: 'FIR_2026_091_CyberExtortion_Signed.pdf',
    caseId: 'CR-2026-DEL-0891',
    documentType: 'FIR',
    fileSize: '2.4 MB',
    sha256Hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    uploadedAt: '2026-10-27 17:20 IST',
    verificationStatus: 'Verified',
  },
  {
    id: 'DOC-1002',
    fileName: 'Forensic_MemoryDump_Analysis_Report.pdf',
    caseId: 'CR-2026-DEL-0891',
    documentType: 'Forensic Report',
    fileSize: '18.1 MB',
    sha256Hash: 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e',
    uploadedAt: '2026-10-27 18:05 IST',
    verificationStatus: 'Verified',
  },
  {
    id: 'DOC-1003',
    fileName: 'Witness_Deposition_Confidential_Signed.pdf',
    caseId: 'CR-2026-MUM-0412',
    documentType: 'Witness Statement',
    fileSize: '1.2 MB',
    sha256Hash: 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
    uploadedAt: '2026-10-26 15:30 IST',
    verificationStatus: 'Verified',
  },
  {
    id: 'DOC-1004',
    fileName: 'Preliminary_ChargeSheet_CourtSubmission.pdf',
    caseId: 'CR-2026-BLR-0245',
    documentType: 'Charge Sheet',
    fileSize: '4.8 MB',
    sha256Hash: '73475cb40a568e8da8a045ced110137e159f890ac4daecf869e0eaca07f9ec9f',
    uploadedAt: '2026-10-25 12:10 IST',
    verificationStatus: 'Verified',
  },
];

export const Documents: React.FC = () => {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('ALL');

  const filteredDocs = sampleDocuments.filter((doc) => {
    const matchesSearch =
      doc.fileName.toLowerCase().includes(search.toLowerCase()) ||
      doc.caseId.toLowerCase().includes(search.toLowerCase()) ||
      doc.sha256Hash.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === 'ALL' || doc.documentType === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Evidence Storage Architecture Header */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600">
                <FolderLock className="h-4 w-4" />
              </span>
              <h2 className="text-lg font-bold text-slate-900">Digital Evidence Vault & Storage Isolation</h2>
            </div>
            <p className="mt-1 text-xs text-slate-500 max-w-2xl leading-relaxed">
              Legal documents are retained strictly in private backend filesystem storage (<code className="font-mono text-teal-700 bg-teal-50 px-1 py-0.5 rounded">storage/documents/</code>),
              preventing direct public URL access. Automated document upload handling, OCR, and validation will be integrated in Stage 3.
            </p>
          </div>

          <button
            type="button"
            disabled
            className="flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-xs font-semibold text-slate-400 border border-slate-200 cursor-not-allowed"
          >
            <Upload className="h-4 w-4" />
            <span>Upload Evidence (Stage 3)</span>
          </button>
        </div>

        {/* Notice Strip */}
        <div className="mt-4 flex items-center gap-2 text-[11px] text-amber-800 bg-amber-50 px-3 py-2 rounded-lg border border-amber-200/80">
          <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
          <span>
            <strong>Stage 2 Restriction Notice:</strong> File uploads are intentionally inactive in this foundation phase.
            The documents below represent synthetic evidence records to validate layout, cryptographic fingerprint display, and metadata structure.
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by filename, case ID, or SHA-256 hash..."
            className="w-full rounded-lg border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-teal-500 focus:outline-none shadow-xs"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <Filter className="h-4 w-4 text-slate-400 shrink-0 hidden sm:block" />
          {['ALL', 'FIR', 'Forensic Report', 'Witness Statement', 'Charge Sheet'].map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors ${
                typeFilter === t
                  ? 'bg-navy-900 text-teal-300 font-semibold shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Document Catalog Table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Document / File Name</th>
                <th className="py-3 px-4">Case Reference</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Size</th>
                <th className="py-3 px-4">Cryptographic Digest (SHA-256)</th>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4 text-right">Integrity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-700 border border-teal-200/60 shrink-0">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{doc.fileName}</div>
                        <span className="text-[10px] font-mono text-slate-400">{doc.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-medium text-slate-700">{doc.caseId}</td>
                  <td className="py-3.5 px-4">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                      {doc.documentType}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">{doc.fileSize}</td>
                  <td className="py-3.5 px-4 font-mono text-[11px] text-slate-500 max-w-xs">
                    <div className="flex items-center gap-1.5 truncate" title={doc.sha256Hash}>
                      <Hash className="h-3 w-3 text-teal-600 shrink-0" />
                      <span className="truncate">{doc.sha256Hash}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 text-[11px]">{doc.uploadedAt}</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                      <CheckCircle2 className="h-3 w-3" />
                      {doc.verificationStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-slate-100 px-4 py-3 bg-slate-50/50 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredDocs.length} of {sampleDocuments.length} synthetic demonstration files</span>
          <span className="font-mono text-[11px] text-slate-400">Isolated Storage: storage/documents/</span>
        </div>
      </div>
    </div>
  );
};
