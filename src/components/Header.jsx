import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  //handle dropdown state
  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  //close dropdown on click
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"} onClick={closeDropdown}>
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleDropdown}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isDropdownOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <Link
                to={"/Products"}
                className="nav-link"
                onClick={closeDropdown}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" onClick={closeDropdown}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Career" onClick={closeDropdown}>
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" onClick={closeDropdown}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
