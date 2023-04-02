import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import Link from "next/link";
import { supabase } from "../../lib/supabaseClient";
import { useUser } from "../../context/UserContext";

const Header = () => {
  const { user, signOut } = useUser();
  const { cart } = useContext(CartContext);

  const handleSignOut = () => {
    supabase.auth.signOut();
  };

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <a className="text-xl font-semibold text-gray-800 cursor-pointer">
              Vantablacc
            </a>
          </Link>
          <div className="hidden md:flex space-x-6">
            {user ? (
              <>
                <Link href="/account">
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Account
                  </a>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Sign In
                  </a>
                </Link>
                <Link href="/register">
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Sign Up
                  </a>
                </Link>
              </>
            )}
            <Link href="/cart">
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Cart ({cart.length})
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
