const Footer = () => (
  <footer className="bg-primary py-10 border-t border-primary-foreground/10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-primary-foreground font-bold text-xl mb-2">VINS ENTERPRISES</p>
          <p className="text-primary-foreground/80 text-base font-medium">Labels & Solutions</p>
          <p className="text-primary-foreground/60 text-sm mt-3 font-mono">GSTIN: 33ADQPL4730P2Z0</p>
          <p className="text-primary-foreground/60 text-sm mt-1">Parent Company: AKP Labels — Over 30 years in the industry</p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-primary-foreground font-bold text-lg mb-4 underline decoration-accent underline-offset-8">Branch Address 1</p>
          <p className="text-primary-foreground/70 text-base font-semibold">AKP ENTERPRISES</p>
          <p className="text-primary-foreground/70 text-base leading-relaxed">4/39, Poonjollai street,<br />Poonganagar, Thiruvallur</p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-primary-foreground font-bold text-lg mb-4 underline decoration-accent underline-offset-8">Quick Links</p>
          <nav className="flex flex-col gap-2 text-primary-foreground/70 text-base font-medium">
            <a href="/" className="hover:text-accent transition-colors">Home</a>
            <a href="/about" className="hover:text-accent transition-colors">About</a>
            <a href="/products" className="hover:text-accent transition-colors">Products</a>
            <a href="/gallery" className="hover:text-accent transition-colors">Gallery</a>
          </nav>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-16 pt-8">
        <p className="text-primary-foreground/50 text-sm text-center font-medium">© {new Date().getFullYear()} VINS Enterprises. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
