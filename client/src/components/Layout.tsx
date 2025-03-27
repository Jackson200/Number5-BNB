import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useScrollTop } from '@/hooks/use-scroll-top';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Use the scroll top hook to scroll to top when route changes
  useScrollTop();
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
