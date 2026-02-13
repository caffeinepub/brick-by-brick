import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { AuthPageLayout } from '@/components/auth/AuthPageLayout';
import { AuthCard } from '@/components/auth/AuthCard';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login, loginStatus, isLoginError, isLoginSuccess } = useInternetIdentity();

  useEffect(() => {
    if (isLoginSuccess) {
      navigate({ to: '/' });
    }
  }, [isLoginSuccess, navigate]);

  const handleRegister = () => {
    login();
  };

  const handleNavigateToLogin = () => {
    navigate({ to: '/login' });
  };

  return (
    <AuthPageLayout>
      <AuthCard
        title="Create your account"
        description="Get started with Internet Identity to create your workspace"
        isLoading={loginStatus === 'logging-in'}
        isError={isLoginError}
        errorMessage="Failed to create account. Please try again."
        buttonText="Continue with Internet Identity"
        loadingText="Creating account..."
        onSubmit={handleRegister}
        footerText="Already have an account?"
        footerLinkText="Sign in"
        onFooterLinkClick={handleNavigateToLogin}
      />
    </AuthPageLayout>
  );
}
