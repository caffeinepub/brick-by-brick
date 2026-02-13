import { useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

export default function AppHeader() {
  const navigate = useNavigate();
  const { clear } = useInternetIdentity();

  const handleLogout = () => {
    clear();
    navigate({ to: '/login' });
  };

  return (
    <div className="fixed top-6 right-6 z-20">
      <Button
        onClick={handleLogout}
        variant="outline"
        size="sm"
        className="bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white border-neutral-200"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Logout
      </Button>
    </div>
  );
}
