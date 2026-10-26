# SecureCase

### AI-Powered Secure Digital Document & Evidence Management System

---

## Project Identity

| Attribute | Details |
| :--- | :--- |
| **Project Name** | **SecureCase** |
| **Full Title** | SecureCase — AI-Powered Secure Digital Document & Evidence Management System |
| **Event** | Smart India Hackathon 2026 |
| **Problem Statement ID** | SIH26190 |
| **Problem Statement** | Secure Digital Document Management System for Legal and Investigation Documents |
| **Theme** | Blockchain & Cybersecurity |
| **Category** | Software |
| **Team Name** | Algo_rift |
| **Team ID** | 170417 |
| **Repository** | [https://github.com/Aright05/SecureCase](https://github.com/Aright05/SecureCase) |
| **Development Status** | **Planning / Early Development** |

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Problem Statement & Objectives](#2-problem-statement--objectives)
   - [The Real-World Challenge](#the-real-world-challenge)
   - [Project Objectives](#project-objectives)
   - [The Proposed Solution](#the-proposed-solution)
   - [Target Users](#target-users)
   - [Intended Impact](#intended-impact)
3. [Core System Workflow](#3-core-system-workflow)
4. [System Architecture](#4-system-architecture)
   - [Architecture Flowchart](#architecture-flowchart)
   - [Component Overview](#component-overview)
5. [Prototype Features & Development Scope](#5-prototype-features--development-scope)
   - [Planned Core Prototype](#planned-core-prototype)
   - [Security & Reliability Requirements](#security--reliability-requirements)
   - [Future Enhancements (Post-Prototype Scope)](#future-enhancements-post-prototype-scope)
6. [Proposed Technology Stack](#6-proposed-technology-stack)
7. [Planned Project Structure](#7-planned-project-structure)
8. [Local Development Setup](#8-local-development-setup)
   - [Prerequisites](#prerequisites)
   - [Step-by-Step Setup Guide](#step-by-step-setup-guide)
9. [Environment Configuration & Data Privacy](#9-environment-configuration--data-privacy)
   - [Sample Environment Template (.env.example)](#sample-environment-template-envexample)
   - [Confidentiality & Secret Hygiene](#confidentiality--secret-hygiene)
10. [Testing Strategy](#10-testing-strategy)
11. [Technical Limitations & Evidence Integrity Notice](#11-technical-limitations--evidence-integrity-notice)
12. [Contribution Workflow](#12-contribution-workflow)
13. [License](#13-license)

---

## 1. Project Overview

During legal and criminal investigations, law enforcement agencies, prosecution departments, and judiciary bodies handle a massive volume of sensitive physical records, digitized documents, and forensic evidence. Current workflows often suffer from fragmented local storage, unmonitored handling, poor version tracking, unauthorized digital access, and vulnerability to document tampering.

**SecureCase** is a proposed centralized, secure digital document and evidence management platform designed specifically for legal and investigative workflows. It provides a structured, role-governed environment for ingesting, classifying, indexing, securely storing, and verifying the cryptographic integrity of critical case documentation.

The system is designed to support the distinct operational needs of authorized personnel:
- **Police Officers & Investigators:** Fast document intake, automated text extraction, categorized case folders, and rapid search across case files.
- **Legal Officers & Prosecutors:** Structured access to charge sheets, witness statements, and court filings with dependable version records.
- **Forensic Experts:** Tamper-evident storage and verification of forensic reports and technical findings.
- **System Administrators:** Centralized access control, user privilege enforcement, and granular audit log inspection.

---

## 2. Problem Statement & Objectives

### The Real-World Challenge
Investigation and legal document workflows face systemic operational and security bottlenecks:
- **Fragmented Repositories:** Case documents are scattered across standalone workstations, unmanaged shared drives, physical filing cabinets, and email threads.
- **Vulnerability to Tampering:** Scanned reports and digital records lack standardized baseline checksums to verify whether a file was modified after ingestion.
- **Unauthorized Exposure:** Inadequate role separation leads to over-privileged access where unauthorized staff can view or copy restricted case files.
- **Inefficient Retrieval:** Searching through hundreds of scanned pages of First Information Reports (FIRs) or case diaries is manual, slow, and prone to oversight.
- **Opaque Audit Trails:** Traditional file systems fail to track who accessed, downloaded, or updated a document, compromising chain-of-custody accountability.

### Project Objectives
1. **Centralize Ingestion & Organization:** Provide an intuitive case-centric repository for organizing legal and investigative records.
2. **Automate Text Extraction & Classification:** Leverage OCR and intelligent metadata extraction to make scanned records searchable and organized by document type.
3. **Enforce Role-Based Access Control (RBAC):** Restrict document actions strictly according to verified operational roles and case assignments.
4. **Guarantee Tamper Detection:** Compute and record SHA-256 cryptographic hashes upon ingestion to detect any subsequent modifications.
5. **Maintain Granular Audit History:** Record every critical action (upload, view, download, update, verification) in a persistent audit trail.

### The Proposed Solution
SecureCase proposes an integrated web application combining a responsive frontend, an API-driven backend, localized OCR document processing, private file storage, and cryptographic verification routines. Documents are never stored in public web paths; instead, they are held in private storage and served only through authenticated, permission-checked backend endpoints.

### Target Users
- **Law Enforcement Officers:** First responders and station officers filing FIRs and preliminary evidence.
- **Lead Investigators:** Detectives managing multi-document investigation dossiers and tracking case timelines.
- **Public Prosecutors & Legal Officers:** Legal counsel reviewing evidence, witness depositions, and charge sheets for court presentation.
- **Forensic Specialists:** Laboratory technicians cataloging ballistics, cyber, or biological forensic reports.
- **Department Administrators:** Compliance and IT personnel configuring user roles, credential lifecycles, and reviewing system audit logs.

### Intended Impact
*The following points reflect target outcomes under development rather than measured production statistics:*
- **Investigation Efficiency:** Reduce hours spent manually searching through physical or unindexed scanned paperwork.
- **Evidence Integrity:** Provide unambiguous cryptographic verification of whether a local document matches its ingestion state.
- **Confidentiality:** Protect victim identities, sensitive witness statements, and classified investigative leads through role separation.
- **Rapid Document Retrieval:** Enable keyword-level search across case metadata and extracted OCR text.
- **Accountability:** Establish transparency over who interacted with specific case files through structured audit logging.

---

## 3. Core System Workflow

The SecureCase lifecycle follows nine deliberate stages designed to protect evidence and support investigative workflows:

```
[1. Ingestion] ──> [2. OCR & Extraction] ──> [3. Classification]
                                                      │
[6. Access Control] <── [5. Secure Storage] <── [4. Security Processing]
         │
         ├──> [7. Retrieval & Search]
         │
         ├──> [8. Audit & Version Tracking]
         │
         └──> [9. Integrity Verification]
```

1. **Document Ingestion:**  
   Authorized users upload supported legal and investigation documents (e.g., PDF, PNG, JPEG, TIFF) through a secure form, associating them with a specific case identifier.
2. **OCR & Data Extraction:**  
   When scanned documents or images are ingested, a localized OCR pipeline extracts text content and parses basic metadata (e.g., page counts, dates, and identified headings) where supported.
3. **Document Classification:**  
   The system categorizes documents into predefined legal types—such as FIRs, Witness Statements, Forensic Reports, Charge Sheets, and Court Orders—based on user input and assisted classification.
4. **Security Processing:**  
   Before persistent writing, the system generates a cryptographic SHA-256 hash of the raw file, validates file signatures (magic bytes) and size limits, and prepares encryption configurations where enabled.
5. **Secure Storage:**  
   The physical file is written to a private, non-public directory structure with randomized internal identifiers, while document metadata, file paths, and reference hashes are recorded in the database.
6. **Access & Authorization:**  
   Every read, download, or edit request is intercepted by backend authorization middleware, ensuring users hold the appropriate role and case permissions.
7. **Document Retrieval & Search:**  
   Users locate case documents via structured filters (case ID, date, category) and full-text search across extracted OCR contents. *(Advanced semantic search is reserved for future iterations once local vector indexing is implemented).*
8. **Audit & Version Tracking:**  
   Every state change produces an immutable audit record capturing timestamp, user ID, action type, and client details. Re-uploaded documents create a distinct version entry rather than overwriting existing records.
9. **Integrity Verification:**  
   Users or auditors can initiate on-demand verification. The system re-hashes the stored file using SHA-256 and compares it against the original recorded hash, immediately flagging any byte-level discrepancy or unauthorized modification.

---

## 4. System Architecture

### Architecture Flowchart

```mermaid
flowchart TD
    subgraph ClientLayer ["Client Layer"]
        User["Authorized User\n(Investigator, Legal Officer, Forensic Expert, Admin)"]
        Frontend["React + TypeScript Frontend\n(Vite, Tailwind CSS)"]
    end

    subgraph GatewayLayer ["API & Security Gateway"]
        Backend["FastAPI Backend Application\n(REST API Endpoints, Pydantic Schemas)"]
        AuthMiddleware["Authentication & RBAC Middleware\n(Password Hashing, Role Validation)"]
    end

    subgraph ServiceLayer ["Core Business Services"]
        CaseService["Case Management Service\n(Case Creation, Dossier Tracking)"]
        DocService["Document Management Service\n(Ingestion, Metadata, Versioning)"]
        OCRService["OCR & Extraction Engine\n(PyMuPDF, Tesseract OCR Engine)"]
    end

    subgraph CrossCuttingLayer ["Cross-Cutting Security Services"]
        HashEngine["SHA-256 Hashing Engine\n(Integrity Check & Tamper Detection)"]
        AuditLogger["Audit Logging Service\n(Action Tracking & Event History)"]
    end

    subgraph StorageLayer ["Persistence & Storage Layer"]
        DB[("Database\n(SQLite Local Dev / PostgreSQL Compatible)")]
        PrivateStore["Private Document Repository\n(Restricted Filesystem / Protected Storage)"]
    end

    subgraph FutureLayer ["Future Integration (Roadmap Scope)"]
        BlockchainNetwork["Blockchain Network\n(Decentralized Evidence-Chain Ledger)"]
    end

    %% Workflow Connections
    User -->|HTTPS / UI Interaction| Frontend
    Frontend -->|Authenticated REST Requests| Backend
    Backend --> AuthMiddleware
    AuthMiddleware --> CaseService
    AuthMiddleware --> DocService
    DocService --> OCRService

    %% Persistence
    CaseService --> DB
    DocService --> DB
    DocService --> PrivateStore
    OCRService --> DB

    %% Cross-cutting linkages
    DocService -.->|Compute / Verify Hash| HashEngine
    DocService -.->|Record Operation| AuditLogger
    CaseService -.->|Record Operation| AuditLogger
    HashEngine --> DB
    AuditLogger --> DB

    %% Future linkage
    HashEngine -.->|"Future Integration (Planned)"| BlockchainNetwork

    classDef future stroke-dasharray: 5 5,stroke:#888,color:#666;
    class BlockchainNetwork future;
```

### Component Overview
- **React Frontend:** Modern, responsive interface providing case exploration, drag-and-drop document intake, verification status cards, and audit log tables.
- **FastAPI Backend:** High-performance asynchronous Python API framework providing request validation via Pydantic and modular API routers.
- **Document & Case Services:** Encapsulated business logic decoupling file handling, indexing, and case associations from the presentation layer.
- **Cross-Cutting Security Engines:** Independent routines that compute SHA-256 digests and write event logs for every major operation.
- **Private Storage Layer:** Filesystem abstraction ensuring uploaded legal assets are never accessible via raw HTTP URLs.
- **Blockchain Interface (Future):** Planned integration anchor to anchor SHA-256 root hashes to a distributed ledger for verifiable multi-agency trust.

---

## 5. Prototype Features & Development Scope

### Planned Core Prototype
The core prototype targets essential functionality for local evaluation:
- [ ] **Secure Login & Authentication:** Credential-based login with hashed password storage and role claims.
- [ ] **Investigation Case Management:** Create, update, and search investigation cases by Case ID, department, and status.
- [ ] **Document Upload & Organization:** Multi-format file intake associated with specific case dossiers.
- [ ] **OCR & Searchable Text Extraction:** Local extraction of readable text from scanned PDF and image evidence.
- [ ] **Document Classification:** Tagging and categorization (FIR, witness statements, forensic reports, charge sheets, court orders).
- [ ] **Document Integrity Verification:** On-demand recalculation of SHA-256 hashes against trusted database records with pass/fail visual cues.
- [ ] **Audit Tracking & Version History:** Chronological log of case interactions and multi-version tracking of amended filings.
- [ ] **Role-Based Access Control (RBAC):** Distinct capability sets for Investigators, Legal Officers, Forensics, and Administrators.

*Note: These features represent planned prototype capabilities currently under active development.*

### Security & Reliability Requirements
The application design requires strict adherence to security and reliability practices:
- **Backend-Enforced Authorization:** Role checks executed on every backend route, never trusting client-side state alone.
- **Secure Password Hashing:** Use of industry-standard key derivation functions (e.g., bcrypt or Argon2) with per-user salts.
- **Private Document Storage:** Storing evidence files outside the web server root with restricted OS-level permissions.
- **Input Validation & Sanitization:** Strict MIME-type inspection, file signature verification, and upload size ceilings (e.g., max 25 MB).
- **Cryptographic Hashing:** Pure SHA-256 computation over full file byte streams.
- **Encryption Readiness:** Architectural hooks for encryption-at-rest configuration on sensitive storage partitions.
- **Test Coverage:** Automated unit and integration testing with clean error boundaries to prevent stack trace leakage.
- **Zero Committed Secrets:** Exclusion of private keys, authentication secrets, and environment files from version control.

### Future Enhancements (Post-Prototype Scope)
*Features submitted in the SIH proposal earmarked for post-prototype development:*
- **Blockchain Integration:** Anchoring document hash trees to a consortium blockchain network for immutable, multi-organization evidence custody.
- **Digital Signatures:** PKI-based cryptographic signing of court orders and charge sheets using X.509 certificates or eSign frameworks.
- **Government API Integration:** Standardized connectors for institutional platforms (e.g., CCTNS, Inter-operable Criminal Justice System / ICJS, eCourts).
- **Advanced AI Capabilities:** Semantic cross-case entity linking, automated legal summarization, and anomaly detection across witness statements.
- **Mobile Application Support:** Dedicated, tamper-resistant field client for on-scene photo evidence and preliminary statement intake.

---

## 6. Proposed Technology Stack

The default architecture prioritizes a local-first, developer-friendly setup that does not require paid external APIs or complex cloud infrastructure for evaluation:

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 18 / 19** with **TypeScript** | Type-safe, component-driven UI for rich case management interfaces. |
| **Frontend Tooling** | **Vite** | Ultra-fast build times, modern module resolution, and seamless local developer experience. |
| **Styling & Animation** | **Tailwind CSS** & **Framer Motion** | Utility-first styling for crisp visual hierarchy and subtle micro-interactions. |
| **Backend Framework** | **Python 3.10+** & **FastAPI** | High-performance asynchronous API framework with automatic OpenAPI documentation. |
| **Data Validation** | **Pydantic v2** | Strong typing and schema validation for request payloads and configuration. |
| **ORM & Database** | **SQLAlchemy** with **SQLite** (Dev) | Seamless local development with SQLite, easily migratable to PostgreSQL for production. |
| **Document Processing** | **PyMuPDF (fitz)** & **Pillow** | Fast, robust local extraction and manipulation of PDF documents and image evidence. |
| **OCR Engine** | **Tesseract OCR** / Local OCR Wrapper | Fully offline, locally runnable optical character recognition without third-party API dependencies. |
| **Integrity & Security** | **Standard Library `hashlib` (SHA-256)** | Deterministic, audited cryptographic hashing for tamper verification. |
| **Backend Testing** | **Pytest** & **HTTPX** | Standardized unit testing and asynchronous API test suites. |

> **Note on Dependencies:** The initial local demo intentionally avoids mandatory cloud dependencies, paid AI credits, or live blockchain testnet connections to ensure reproducible, zero-cost evaluation on standard developer workstations.

---

## 7. Planned Project Structure

The planned project structure separates the frontend client, backend application, local evidence storage, and documentation. Files will be created incrementally as development progresses:

```
SecureCase/
├── frontend/                        # React + TypeScript Web Application
│   ├── src/
│   │   ├── assets/                  # Static assets and icons
│   │   ├── components/              # Modular UI components (Navigation, Modals, Cards)
│   │   ├── pages/                   # Application views (Dashboard, Cases, Upload, Verify)
│   │   ├── services/                # API client functions and HTTP wrappers
│   │   ├── types/                   # TypeScript interfaces and schema types
│   │   ├── App.tsx                  # Main application component & router
│   │   └── main.tsx                 # Frontend entry point
│   ├── public/                      # Static public web assets
│   ├── index.html                   # HTML template
│   ├── package.json                 # Frontend dependencies and npm scripts
│   ├── tsconfig.json                # TypeScript compiler configuration
│   └── vite.config.ts               # Vite configuration
├── backend/                         # FastAPI Python Application
│   ├── app/
│   │   ├── api/                     # REST API route handlers
│   │   │   ├── v1/
│   │   │   │   ├── auth.py          # Authentication and token endpoints
│   │   │   │   ├── cases.py         # Case management endpoints
│   │   │   │   ├── documents.py     # Document ingestion and retrieval
│   │   │   │   └── verification.py  # Hash comparison and integrity checks
│   │   ├── core/                    # System configuration, security, and database setup
│   │   │   ├── config.py            # Environment settings and paths
│   │   │   ├── database.py          # SQLAlchemy session maker
│   │   │   └── security.py          # Password hashing and token utilities
│   │   ├── models/                  # SQLAlchemy ORM database models
│   │   │   ├── case.py              # Case entity schema
│   │   │   ├── document.py          # Document and version schemas
│   │   │   ├── audit.py             # Audit trail event schemas
│   │   │   └── user.py              # User and role definitions
│   │   ├── schemas/                 # Pydantic request and response schemas
│   │   ├── services/                # Business logic and processing modules
│   │   │   ├── ocr_service.py       # Text extraction pipeline
│   │   │   ├── hash_service.py      # SHA-256 calculation and verification
│   │   │   └── storage_service.py   # Private filesystem storage manager
│   │   └── main.py                  # FastAPI application entry point
│   ├── tests/                       # Pytest automated test suite
│   │   ├── test_auth.py             # Authentication and RBAC tests
│   │   ├── test_documents.py        # Ingestion and storage validation
│   │   └── test_verification.py     # Hash and tamper detection tests
│   └── requirements.txt             # Backend Python dependencies
├── storage/                         # Private document storage (Git-ignored)
│   └── .gitkeep                     # Placeholder for local directory tracking
├── docs/                            # Architecture specifications and SIH proposal docs
├── .env.example                     # Reference environment variables
├── .gitignore                       # Git exclusion rules for security and dependencies
└── README.md                        # Master repository documentation
```

---

## 8. Local Development Setup

> **Current Implementation Note:**  
> The repository is currently in the **Planning / Early Development** stage. Application files and scripts are being scaffolded. The instructions below document the standardized installation workflow that will become active as code modules are introduced.

### Prerequisites
Before running the application locally, ensure your machine has the following tools installed:
- **Git:** Version 2.30+ ([Download Git](https://git-scm.com/))
- **Node.js & npm:** Node.js LTS v18 or v20 ([Download Node.js](https://nodejs.org/))
- **Python:** Python 3.10 or 3.11 ([Download Python](https://www.python.org/))
- **OCR Engine (Optional for OCR testing):** Tesseract OCR installed locally if testing scanned image text extraction.

### Step-by-Step Setup Guide

#### 1. Clone the Repository
Open a terminal (PowerShell or Bash) and clone the repository:
```bash
git clone https://github.com/Aright05/SecureCase.git
cd SecureCase
```

#### 2. Backend Setup (Planned Workflow)
1. Navigate into the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a Python virtual environment:
   - **Windows (PowerShell):**
     ```powershell
     python -m venv venv
     .\venv\Scripts\Activate.ps1
     ```
   - **macOS / Linux:**
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```
3. Install backend dependencies:
   ```bash
   pip install --upgrade pip
   pip install -r requirements.txt
   ```
4. Configure local environment variables:
   ```bash
   copy ..\.env.example .env     # Windows
   # cp ../.env.example .env     # Linux / macOS
   ```
5. Start the FastAPI development server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```
   *The interactive Swagger API documentation will be available at `http://localhost:8000/docs`.*

#### 3. Frontend Setup (Planned Workflow)
1. In a separate terminal window, navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install Node dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The web client will be accessible at `http://localhost:5173`.*

---

## 9. Environment Configuration & Data Privacy

### Sample Environment Template (`.env.example`)
Environment configurations govern local port assignments, secret keys, and filesystem targets. Copy this template to create a local `.env` file once backend scaffolding is complete:

```ini
# ==============================================================================
# SecureCase — Environment Configuration Template
# Duplicate this file as '.env' in your local environment.
# NEVER commit the active '.env' file or genuine credentials to Git.
# ==============================================================================

# Application Environment
APP_ENV=development
DEBUG=True
PORT=8000
HOST=127.0.0.1

# Client URL (Cross-Origin Resource Sharing)
FRONTEND_URL=http://localhost:5173

# Database Connection (SQLite default for local development)
DATABASE_URL=sqlite:///./storage/securecase.db
# Example for future PostgreSQL deployment:
# DATABASE_URL=postgresql://securecase_user:securecase_password@localhost:5432/securecase_db

# Cryptographic Token & Authentication Security
# Generate a secure key in production via: python -c "import secrets; print(secrets.token_hex(32))"
SECRET_KEY=change-this-to-a-secure-random-secret-key-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60

# Evidence & Document Storage
# Local filesystem path for private document storage (outside public web access)
STORAGE_DIR=../storage/documents
MAX_UPLOAD_SIZE_MB=25

# Document Processing & OCR
OCR_ENGINE=tesseract
TESSERACT_CMD_PATH=

# AI & Classification Configuration (Optional / Local-First)
AI_PROVIDER=local
AI_API_KEY=
```

### Confidentiality & Secret Hygiene
Investigation files and case databases carry strict privacy obligations:
- **No Committed Secrets:** `.env` files, API keys, private keys, database files (`.db`, `.sqlite`), and server logs are explicitly excluded via `.gitignore`.
- **Private Evidence Isolation:** Stored evidence files reside in a dedicated private directory (`storage/`) and are never exposed directly through static web routing.
- **Synthesized Demo Data Only:** Real legal records, actual police FIRs, or personal citizen information must never be committed to public repositories or used in demo test suites. All sample test fixtures must be entirely synthetic.

---

## 10. Testing Strategy

The project design incorporates automated verification across critical functional boundaries:

| Test Domain | Intended Scope |
| :--- | :--- |
| **Authentication & RBAC** | Verify that unauthorized requests receive HTTP 401/403, tokens expire properly, and role permissions are strictly enforced on protected endpoints. |
| **Case & Dossier Operations** | Validate creation, updating, and filtering of investigation dossiers with unique identifier enforcement. |
| **Document Upload & Sanitization** | Ensure file size limits, MIME-type checks, and path traversal defenses prevent unauthorized file uploads. |
| **OCR Text Extraction** | Test text extraction accuracy across synthetic scanned sample PDFs and sample legal forms. |
| **Search Functionality** | Validate metadata queries and keyword retrieval across parsed document bodies. |
| **Hash Verification & Tamper Detection** | Test that unaltered files return verification passes, while files modified by a single byte trigger immediate tamper warnings. |
| **Audit Trails & Version Tracking** | Verify that document actions generate persistent, chronologically sequenced audit logs and preserve prior document versions. |

Backend tests will be executed using Pytest:
```bash
pytest backend/tests/ -v
```

---

## 11. Technical Limitations & Evidence Integrity Notice

To maintain academic and professional transparency for reviewers and judges, the following technical and legal realities are explicitly stated:

> ### Critical System Notices
> 1. **Byte-Level Integrity vs. Authentic Origin:**  
>    A matching SHA-256 hash verifies that a document has not been altered since the moment it was ingested into SecureCase. It proves **byte-level consistency** with the stored reference hash; it **does not** verify whether the document was authentic, accurate, or legitimate prior to ingestion.
> 2. **Hashing Is Not Encryption:**  
>    Cryptographic hashing (SHA-256) is a one-way mathematical digest function used for integrity verification. It does not obfuscate or encrypt document contents. Document confidentiality relies on storage access controls and configured encryption-at-rest.
> 3. **Database Audit Logs Are Not Automatically Immutable:**  
>    In a local prototype environment, audit trails stored in relational databases (such as SQLite or PostgreSQL) are subject to administrator privileges and are not inherently immutable without external append-only protections or cryptographic anchoring.
> 4. **Blockchain Integrity Status:**  
>    Blockchain integration is planned for future development phases. Decentralized, multi-party immutability must not be claimed until an active, verified blockchain integration has been implemented and tested.
> 5. **OCR and AI Extraction Review:**  
>    Text generated via OCR engines and automated categorization heuristics are assistive tools and may contain parsing errors or misclassifications. All AI-assisted outputs require human review before use in formal legal proceedings.
> 6. **Prototype Disclaimer:**  
>    This project is an academic prototype developed for the Smart India Hackathon 2026. It is **not** a certified digital evidence platform, does not hold forensic legal certification, and must not be used as a substitute for certified law enforcement chain-of-custody protocols.

---

## 12. Contribution Workflow

Contributions from team members and open-source contributors should adhere to standard Git feature-branch workflows:

1. **Fork or Clone:** Work from your own fork or a feature branch off `main`.
2. **Create a Dedicated Branch:**
   ```bash
   git checkout -b feature/document-hashing-service
   # or
   git checkout -b fix/upload-size-validation
   ```
3. **Write Clean, Documented Code:** Follow PEP 8 guidelines for Python and standard ESLint / Prettier rules for TypeScript.
4. **Include Tests:** Provide Pytest test cases for new backend endpoints or services.
5. **Update Documentation:** Update API documentation, inline docstrings, and this README if introducing architectural changes.
6. **Submit a Pull Request:** Open a PR against `main` with a clear explanation of proposed changes and verification steps.

---

## 13. License

**Status:** Not yet specified.

*A formal open-source or institutional license will be selected and added to the repository prior to project release.*
