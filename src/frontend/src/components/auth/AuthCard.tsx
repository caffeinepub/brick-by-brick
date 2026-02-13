import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle } from 'lucide-react';

interface AuthCardProps {
  title: string;
  description: string;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  buttonText: string;
  loadingText: string;
  onSubmit: () => void;
  footerText: string;
  footerLinkText: string;
  onFooterLinkClick: () => void;
  children?: ReactNode;
}

export function AuthCard({
  title,
  description,
  isLoading,
  isError,
  errorMessage,
  buttonText,
  loadingText,
  onSubmit,
  footerText,
  footerLinkText,
  onFooterLinkClick,
  children,
}: AuthCardProps) {
  return (
    <Card className="shadow-2xl border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm">
      <CardHeader className="space-y-3 pb-6">
        <CardTitle className="text-3xl font-bold text-center tracking-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-center text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-5 px-6">
        {isError && (
          <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="ml-2">
              {errorMessage}
            </AlertDescription>
          </Alert>
        )}
        
        {children}
        
        <Button
          onClick={onSubmit}
          disabled={isLoading}
          className="w-full h-12 text-base font-semibold shadow-sm hover:shadow-md transition-all"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              {loadingText}
            </>
          ) : (
            buttonText
          )}
        </Button>
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-4 pt-6 pb-8">
        <div className="text-sm text-center text-neutral-600 dark:text-neutral-400">
          {footerText}{' '}
          <button
            onClick={onFooterLinkClick}
            className="font-semibold text-neutral-900 dark:text-neutral-100 hover:underline focus-visible:underline transition-all"
            type="button"
          >
            {footerLinkText}
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
