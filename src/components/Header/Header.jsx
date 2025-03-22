const Header = () => {
  return (
    <header className="bg-neutral-900/20">
      <div className="container mx-auto flex items-center justify-between py-5">
        <div>
          <a href="/">Logo</a>
        </div>
        <nav className="flex gap-9">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
