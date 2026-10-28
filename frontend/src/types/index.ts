export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'offline';
  service: string;
  version: string;
  environment: string;
  database?: string;
  responseTimeMs?: number;
}

export interface MetricCardData {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'neutral' | 'negative';
  description: string;
}

export interface CaseDossier {
  id: string;
  title: string;
  category: 'Cybercrime' | 'Financial Fraud' | 'Forensic Analysis' | 'Document Tampering';
  leadInvestigator: string;
  status: 'Active' | 'Under Investigation' | 'Court Ready' | 'Archived';
  documentCount: number;
  lastUpdated: string;
}

export interface IngestedDocument {
  id: string;
  fileName: string;
  caseId: string;
  documentType: 'FIR' | 'Witness Statement' | 'Forensic Report' | 'Charge Sheet' | 'Court Order';
  fileSize: string;
  sha256Hash: string;
  uploadedAt: string;
  verificationStatus: 'Verified' | 'Pending' | 'Flagged';
}

export interface AuditRecord {
  id: string;
  timestamp: string;
  action: 'EVIDENCE_INGEST' | 'HASH_VERIFICATION' | 'DOSSIER_ACCESS' | 'PERMISSION_AUDIT' | 'EXPORT_RECORD';
  actor: string;
  role: string;
  target: string;
  ipAddress: string;
  status: 'SUCCESS' | 'ALERT' | 'DENIED';
}
