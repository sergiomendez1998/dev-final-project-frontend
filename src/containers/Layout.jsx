import React from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from '../components/layout/Footer';

export const Layout = ({children}) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 z-[3] relative right-7 md:static px-4 py-8 overflow-auto h-screen  scrollbar-track-violet scrollbar-thin">
        {children} 
        <Footer />     
      </main>      
    </div>
  );
};
