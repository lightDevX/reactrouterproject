import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-neutral-900/40 text-3xl font-semibold text-amber-100">
      <div className="container mx-auto flex items-center justify-between py-5">
        <div>
          <NavLink to="/">Logo</NavLink>
        </div>
        <nav className="flex gap-9">
          <NavLink className="active:bg-red-300" to="/">
            Home
          </NavLink>
          <NavLink className="active:bg-red-300" to="/services">
            Services
          </NavLink>
          <NavLink className="active:bg-red-300" to="/about">
            About
          </NavLink>
          <NavLink className="active:bg-red-300" to="/users">
            Users
          </NavLink>
          <NavLink className="active:bg-red-300" to="/contact">
            Contact
          </NavLink>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
