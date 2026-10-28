import { HealthStatus } from '../types';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

export async function fetchBackendHealth(): Promise<HealthStatus> {
  const startTime = performance.now();
  try {
    const response = await fetch(`${API_BASE}/health`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    const elapsed = Math.round(performance.now() - startTime);

    if (!response.ok) {
      return {
        status: 'degraded',
        service: 'SecureCase Backend',
        version: 'Unknown',
        environment: 'Unknown',
        database: 'Error',
        responseTimeMs: elapsed,
      };
    }

    const data = await response.json();
    return {
      status: data.status === 'healthy' ? 'healthy' : 'degraded',
      service: data.service || 'SecureCase API',
      version: data.version || '0.1.0',
      environment: data.environment || 'development',
      database: data.database || 'connected',
      responseTimeMs: elapsed,
    };
  } catch (error) {
    return {
      status: 'offline',
      service: 'SecureCase Backend',
      version: 'N/A',
      environment: 'Offline',
      database: 'Unavailable',
      responseTimeMs: Math.round(performance.now() - startTime),
    };
  }
}
