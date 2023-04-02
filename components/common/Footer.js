import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="hover:text-white cursor-pointer">About</a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="hover:text-white cursor-pointer">Careers</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* Add more columns if needed */}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} YourCompanyName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
