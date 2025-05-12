import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
    let navItems = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "AboutUs",
        path: "/about",
      },
      {
        name: "Contact",
        path: "/contact",
      },
    ];
  return (
    <div className="header">
      {/* <h1>Hello</h1> */}
      <div className="link-container">
        {navItems.map((val) => (
          <Link key={val.name} to={val.path}>
            {val.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar
