import React from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from '../components/layout/Footer';

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 z-[3] relative right-7 md:static px-4 py-5 overflow-auto h-screen  scrollbar-track-violet scrollbar-thin">
        <main className="min-h-[95%]">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
