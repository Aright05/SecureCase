import React, { useState } from 'react';
import {
  ShieldCheck,
  Hash,
  FileText,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Info,
} from 'lucide-react';

export const Verification: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<'clean' | 'tampered'>('clean');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    tested: boolean;
    passed: boolean;
    calculatedHash: string;
    expectedHash: string;
    timestamp: string;
  }>({
    tested: true,
    passed: true,
    calculatedHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    expectedHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    timestamp: '2026-10-27 18:45:10 IST',
  });

  const runSimulation = (scenario: 'clean' | 'tampered') => {
    setSelectedScenario(scenario);
    setIsVerifying(true);

    setTimeout(() => {
      const original = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
      const tampered = '0a4e76d91fbb257a12389948ba2c4311ea3d849887711cae93bb85429188f110';

      setVerificationResult({
        tested: true,
        passed: scenario === 'clean',
        calculatedHash: scenario === 'clean' ? original : tampered,
        expectedHash: original,
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }) + ' IST',
      });
      setIsVerifying(false);
    }, 400);
  };

  return (
    <div className="space-y-6">
      {/* Verification Header */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 border border-teal-500/30">
            <ShieldCheck className="h-5 w-5 stroke-[2.2]" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Cryptographic Integrity & Tamper Detection</h2>
            <p className="text-xs text-slate-500">
              Deterministic byte-level SHA-256 hash recalculation against immutable recorded reference digests.
            </p>
          </div>
        </div>

        {/* Section 11 Integrity Notice Alert */}
        <div className="mt-4 rounded-lg border border-teal-200/80 bg-teal-50/60 p-4 text-xs text-teal-900">
          <div className="flex items-start gap-2.5">
            <Info className="h-4 w-4 text-teal-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-teal-950 font-semibold">
                Technical Notice (System Specification Section 11):
              </strong>
              <p className="text-teal-800 leading-relaxed">
                A matching SHA-256 hash confirms that a document has not suffered byte-level modification since its ingestion into SecureCase.
                It proves <strong>integrity of stored state</strong>; it does not verify whether the document was authentic prior to intake.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demonstration Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Verification Trigger Panel */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card space-y-4">
          <h3 className="font-bold text-slate-900 text-sm">Simulation Controller (Stage 2)</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Test how SecureCase flags unauthorized modifications by switching between an authentic document byte-stream and an altered byte-stream.
          </p>

          <div className="space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
              Sample Document
            </label>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs flex items-center gap-2.5">
              <FileText className="h-4 w-4 text-teal-600 shrink-0" />
              <div className="truncate">
                <span className="font-semibold text-slate-800 block truncate">FIR_2026_091_CyberExtortion_Signed.pdf</span>
                <span className="font-mono text-[10px] text-slate-400">Case: CR-2026-DEL-0891</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
              Select Test Scenario
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => runSimulation('clean')}
                className={`rounded-lg border p-2.5 text-center font-medium transition-all ${
                  selectedScenario === 'clean'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold shadow-xs'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Intact File
              </button>
              <button
                type="button"
                onClick={() => runSimulation('tampered')}
                className={`rounded-lg border p-2.5 text-center font-medium transition-all ${
                  selectedScenario === 'tampered'
                    ? 'border-red-600 bg-red-50 text-red-900 font-bold shadow-xs'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                1-Byte Altered
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => runSimulation(selectedScenario)}
            disabled={isVerifying}
            className="w-full mt-2 flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-xs font-semibold text-white shadow hover:bg-navy-850 active:scale-[0.99] transition-all"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isVerifying ? 'animate-spin text-teal-400' : ''}`} />
            <span>{isVerifying ? 'Recalculating Digest...' : 'Run Cryptographic Check'}</span>
          </button>
        </div>

        {/* Verification Result Output Panel */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-sm">Cryptographic Audit Result</h3>
            <span className="font-mono text-[11px] text-slate-400">Timestamp: {verificationResult.timestamp}</span>
          </div>

          {/* Status Banner */}
          <div
            className={`rounded-xl border p-4 flex items-center gap-3.5 ${
              verificationResult.passed
                ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                : 'border-red-200 bg-red-50 text-red-900'
            }`}
          >
            {verificationResult.passed ? (
              <CheckCircle2 className="h-7 w-7 text-emerald-600 shrink-0" />
            ) : (
              <XCircle className="h-7 w-7 text-red-600 shrink-0" />
            )}
            <div>
              <div className="font-bold text-sm">
                {verificationResult.passed
                  ? 'Integrity Verified: Byte-Level Checksum Match'
                  : 'Tamper Detected: Checksum Mismatch Alert'}
              </div>
              <p className="text-xs mt-0.5 leading-relaxed opacity-90">
                {verificationResult.passed
                  ? 'The recalculated SHA-256 digest is bit-for-bit identical to the ingestion reference record.'
                  : 'Calculated hash does not match the database reference. File content has been modified after ingestion.'}
              </p>
            </div>
          </div>

          {/* Hash Comparison Table */}
          <div className="space-y-3 pt-2">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                <span className="font-semibold flex items-center gap-1.5">
                  <Hash className="h-3.5 w-3.5 text-teal-600" />
                  Database Reference Digest (SHA-256 at Ingestion)
                </span>
                <span className="font-mono text-[10px] text-emerald-600 font-semibold">IMMUTABLE BASELINE</span>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 font-mono text-xs text-slate-800 break-all select-all">
                {verificationResult.expectedHash}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                <span className="font-semibold flex items-center gap-1.5">
                  <Hash className="h-3.5 w-3.5 text-slate-500" />
                  Live Recalculated Digest (SHA-256 Current Stream)
                </span>
                <span
                  className={`font-mono text-[10px] font-semibold ${
                    verificationResult.passed ? 'text-emerald-600' : 'text-red-600'
                  }`}
                >
                  {verificationResult.passed ? 'MATCH CONFIRMED' : 'DIGEST MISMATCH'}
                </span>
              </div>
              <div
                className={`rounded-lg border p-2.5 font-mono text-xs break-all select-all ${
                  verificationResult.passed
                    ? 'border-emerald-200 bg-emerald-50/50 text-emerald-900'
                    : 'border-red-200 bg-red-50/50 text-red-900 font-semibold'
                }`}
              >
                {verificationResult.calculatedHash}
              </div>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-100">
            <span>Algorithm: SHA-256 (256-bit cryptographic hash)</span>
            <span>SIH26190 Prototype Simulation</span>
          </div>
        </div>
      </div>
    </div>
  );
};
