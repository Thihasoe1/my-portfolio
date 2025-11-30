const Footer = () => {
  return (
    <footer className="py-8 bg-dark text-light text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-4">© {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <a
            href="https://www.linkedin.com/in/saw-thi-ha-soe-812834368"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex  text-white items-center justify-center px-4 py-2 bg-gray-800 hover:bg-primary hover:text-dark text-light rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.11 2.11 0 01-2.11-2.11 2.11 2.11 0 112.11 2.11zm1.763 12.99h-3.55v-9h3.55v9z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/Thihasoe1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-white items-center justify-center px-4 py-2 bg-gray-800 hover:bg-primary hover:text-dark text-light rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.567 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
