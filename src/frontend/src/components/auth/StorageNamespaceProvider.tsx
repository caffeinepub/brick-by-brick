import { useEffect } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { setStorageNamespace } from '../../lib/storage';

interface StorageNamespaceProviderProps {
  children: React.ReactNode;
}

export default function StorageNamespaceProvider({ children }: StorageNamespaceProviderProps) {
  const { identity, loginStatus } = useInternetIdentity();

  useEffect(() => {
    if (identity && loginStatus === 'success') {
      const principal = identity.getPrincipal().toString();
      setStorageNamespace(principal);
    } else {
      setStorageNamespace(null);
    }
  }, [identity, loginStatus]);

  return <>{children}</>;
}
