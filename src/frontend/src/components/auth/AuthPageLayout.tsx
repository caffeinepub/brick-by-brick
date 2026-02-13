import { ReactNode } from 'react';

interface AuthPageLayoutProps {
  children: ReactNode;
}

export function AuthPageLayout({ children }: AuthPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md space-y-8">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-2">
            BRICK BY BRICK
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-medium">
            Screenplay Workspace
          </p>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Decorative background blur */}
          <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200/50 via-neutral-300/50 to-neutral-200/50 dark:from-neutral-800/50 dark:via-neutral-700/50 dark:to-neutral-800/50 blur-2xl -z-10 rounded-3xl" />
          
          {children}
        </div>

        {/* Footer */}
        <footer className="text-center pt-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-neutral-900 dark:text-neutral-100 hover:underline focus-visible:underline transition-all"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
