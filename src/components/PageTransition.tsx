import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="animate-page-reveal">
      <div className="animate-page-content">
        {children}
      </div>
    </div>
  );
};
