import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { AuthPageLayout } from '@/components/auth/AuthPageLayout';
import { AuthCard } from '@/components/auth/AuthCard';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, loginStatus, isLoginError, isLoginSuccess } = useInternetIdentity();

  useEffect(() => {
    if (isLoginSuccess) {
      navigate({ to: '/' });
    }
  }, [isLoginSuccess, navigate]);

  const handleLogin = () => {
    login();
  };

  const handleNavigateToRegister = () => {
    navigate({ to: '/register' });
  };

  return (
    <AuthPageLayout>
      <AuthCard
        title="Sign in"
        description="Continue with your Internet Identity to access your workspace"
        isLoading={loginStatus === 'logging-in'}
        isError={isLoginError}
        errorMessage="Failed to sign in. Please try again."
        buttonText="Continue with Internet Identity"
        loadingText="Connecting..."
        onSubmit={handleLogin}
        footerText="Don't have an account?"
        footerLinkText="Create one"
        onFooterLinkClick={handleNavigateToRegister}
      />
    </AuthPageLayout>
  );
}
