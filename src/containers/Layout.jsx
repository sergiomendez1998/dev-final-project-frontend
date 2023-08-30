import React from 'react';
import { Sidebar } from './Sidebar';
import { Footer } from '../components/layout/Footer';

export const Layout = ({children}) => {
  return (
    <div className="flex gap-0">
      <Sidebar />
      <main className="flex-1 px-3 py-4 overflow-auto h-full">
        {children} 
        <Footer />     
      </main>      
    </div>
  );
};
