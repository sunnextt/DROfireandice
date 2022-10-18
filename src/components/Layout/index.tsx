import React from 'react';
import Footer from './footer';
import Nav from './nav';

const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Nav />
      <div className="px-8">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
