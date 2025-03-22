import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-neutral-900/40 text-3xl font-semibold text-amber-100">
      <div className="container mx-auto flex items-center justify-between py-5">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <nav className="flex gap-9">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
