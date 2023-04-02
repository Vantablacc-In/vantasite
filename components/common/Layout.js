import Footer from "./Footer";
import Header from "./Header";
import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 mt-8 mb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
