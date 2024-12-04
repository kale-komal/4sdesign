"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../style/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); 
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); 
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <>
      <header id="stickyHeader" className="container-fluid py-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-3 col-2 ">
              <Link href="/" className="d-flex gap-2 logo-container">
                <img
                  src="/images/logo/Four-S-logo.png"
                  alt="Logo"
                  className="logo"
                />
                <img
                  src="/images/logo/4S-logo-name.png"
                  alt="Logo"
                  className="logo-name"
                />
              </Link>
            </div>

            <div className="col-md-6 col-2">
              <nav className="navbar-expand-lg">
                <button
                  className={`navbar-toggler ${menuOpen ? "" : "collapsed"}`}
                  type="button"
                  aria-controls="navbarNav"
                  aria-expanded={menuOpen ? "true" : "false"}
                  aria-label="Toggle navigation"
                  onClick={handleToggle}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${
                    menuOpen ? "show" : ""
                  }`}
                  id="navbarNav"
                >
                  <ul className="navbar-nav ml-auto">
                    <li>
                      <Link
                        href="#"
                        className="nav-link"
                        onClick={handleLinkClick}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#about"
                        className="nav-link"
                        style={{ whiteSpace: "nowrap" }}
                        onClick={handleLinkClick}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#services"
                        className="nav-link"
                        onClick={handleLinkClick}
                      >
                        Services
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="#client"
                        className="nav-link"
                        onClick={handleLinkClick}
                      >
                        Client
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="#career"
                        className="nav-link"
                        onClick={handleLinkClick}
                      >
                        Career
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="#contact"
                        className="nav-link"
                        onClick={handleLinkClick}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
