import { NavLink } from "react-router";

const DaisyHeader = () => {
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
          <NavLink className="active:bg-red-300" to="/books">
            Books
          </NavLink>
          <NavLink className="active:bg-red-300" to="/register">
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default DaisyHeader;
