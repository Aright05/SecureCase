import React, { useEffect, useState } from 'react';
import { Menu, Activity, RefreshCw, UserCheck } from 'lucide-react';
import { fetchBackendHealth } from '../services/api';
import { HealthStatus } from '../types';

interface TopBarProps {
  onToggleSidebar: () => void;
  title: string;
  subtitle?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ onToggleSidebar, title, subtitle }) => {
  const [health, setHealth] = useState<HealthStatus>({
    status: 'offline',
    service: 'Checking...',
    version: '...',
    environment: '...',
  });
  const [isRefreshing, setIsRefreshing] = useState(false);

  const checkHealth = async () => {
    setIsRefreshing(true);
    const data = await fetchBackendHealth();
    setHealth(data);
    setIsRefreshing(false);
  };

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-slate-200/90 bg-white/95 px-4 backdrop-blur sm:px-8">
      {/* Left: Mobile Toggle & Page Title */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{title}</h1>
            <span className="hidden sm:inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 border border-slate-200">
              Stage 2 Foundation
            </span>
          </div>
          {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
      </div>

      {/* Right: Live Health Pill, Prototype Notice, User Profile */}
      <div className="flex items-center gap-3">
        {/* Backend Connectivity Status Pill */}
        <div className="hidden md:flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-xs">
          <div className="flex items-center gap-1.5">
            <span
              className={`h-2.5 w-2.5 rounded-full animate-pulse ${
                health.status === 'healthy'
                  ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                  : health.status === 'degraded'
                  ? 'bg-amber-500'
                  : 'bg-red-500'
              }`}
            />
            <span className="font-medium text-slate-700">
              {health.status === 'healthy'
                ? `FastAPI: Healthy (${health.database || 'SQLite'})`
                : health.status === 'degraded'
                ? 'Backend: Degraded'
                : 'Backend: Offline (Check port 8000)'}
            </span>
          </div>
          <button
            type="button"
            onClick={checkHealth}
            disabled={isRefreshing}
            title="Refresh backend status"
            className="ml-1 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <RefreshCw className={`h-3 w-3 ${isRefreshing ? 'animate-spin text-teal-600' : ''}`} />
          </button>
        </div>

        {/* Prototype Scope Warning Pill */}
        <div className="hidden xl:flex items-center gap-1.5 rounded-lg border border-teal-200/60 bg-teal-50 px-2.5 py-1.5 text-xs text-teal-800 font-medium">
          <Activity className="h-3.5 w-3.5 text-teal-600" />
          <span>Fictional Demo Data</span>
        </div>

        {/* Demo User Pill */}
        <div className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white p-1.5 pr-3 shadow-xs">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-900 text-teal-400 font-semibold text-xs">
            IO
          </div>
          <div className="hidden sm:block text-left">
            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-slate-800">Officer S. Roy</span>
              <UserCheck className="h-3 w-3 text-emerald-600" />
            </div>
            <p className="text-[10px] text-slate-500">Lead Investigator (Demo)</p>
          </div>
        </div>
      </div>
    </header>
  );
};
