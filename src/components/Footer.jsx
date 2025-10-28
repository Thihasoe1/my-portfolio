const Footer = () => {
  return (
    <footer className="py-8 bg-dark text-light text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-primary transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-primary transition">
            GitHub
          </a>
          <a href="#" className="hover:text-primary transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
