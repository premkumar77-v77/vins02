import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Why Us", href: "/why-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8">
        {/* Logo on the Left */}
        <Link to="/" className="text-primary-foreground font-bold text-2xl md:text-3xl tracking-tight leading-tight">
          VINS <span className="text-accent-brand">ENTERPRISES</span>
          <span className="block text-sm font-medium text-primary-foreground/70 tracking-wide">Labels & Solutions</span>
        </Link>

        {/* Navigation Links on the Right (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            'download' in l && l.download ? (
              <a key={l.href} href={l.href} download className="text-primary-foreground/90 hover:text-accent text-base font-semibold transition-colors">
                {l.label}
              </a>
            ) : (
              <Link key={l.href} to={l.href} className="text-primary-foreground/90 hover:text-accent text-base font-semibold transition-colors">
                {l.label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile menu button on the Right */}
        <button className="lg:hidden text-primary-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 pb-6 shadow-xl">
          {navLinks.map((l) => (
            'download' in l && l.download ? (
              <a key={l.href} href={l.href} download onClick={() => setOpen(false)} className="block px-8 py-4 text-primary-foreground/90 hover:text-accent text-lg font-semibold transition-colors border-b border-primary-foreground/5">
                {l.label}
              </a>
            ) : (
              <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="block px-8 py-4 text-primary-foreground/90 hover:text-accent text-lg font-semibold transition-colors border-b border-primary-foreground/5">
                {l.label}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
