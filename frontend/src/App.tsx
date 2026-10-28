import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Cases } from './pages/Cases';
import { Documents } from './pages/Documents';
import { Verification } from './pages/Verification';
import { Audit } from './pages/Audit';
import { Login } from './pages/Login';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route wrapping core views */}
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/login" element={<Login />} />
          {/* Fallback to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
