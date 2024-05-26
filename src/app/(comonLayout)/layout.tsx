'use client';

import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navbar';
import React, { ReactNode } from 'react';

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
