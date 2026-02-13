import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';

interface AuthGateProps {
  children: React.ReactNode;
  requireAuth: boolean;
}

export default function AuthGate({ children, requireAuth }: AuthGateProps) {
  const navigate = useNavigate();
  const { identity, isInitializing, loginStatus } = useInternetIdentity();

  useEffect(() => {
    // Wait for initialization to complete
    if (isInitializing) {
      return;
    }

    const isAuthenticated = !!identity && loginStatus === 'success';

    if (requireAuth && !isAuthenticated) {
      // Protected route, user not authenticated -> redirect to login
      navigate({ to: '/login' });
    } else if (!requireAuth && isAuthenticated) {
      // Auth route (login/register), user already authenticated -> redirect to home
      navigate({ to: '/' });
    }
  }, [identity, isInitializing, loginStatus, requireAuth, navigate]);

  // Show nothing while initializing to avoid flicker
  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-neutral-900 border-r-transparent"></div>
          <p className="mt-4 text-neutral-600">Loading...</p>
        </div>
      </div>
    );
  }

  const isAuthenticated = !!identity && loginStatus === 'success';

  // Only render children if auth state matches requirement
  if (requireAuth && !isAuthenticated) {
    return null;
  }
  if (!requireAuth && isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
