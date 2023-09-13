import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navBar">
      <button class="buttons" role="button">
        <span class="text">Gokula..</span>
        <span>Krishnan</span>
      </button>
      {/* <span className='name'>Gokula Krishnan</span> */}
      <div className="menuItem">
        <Link
          activeClass="active"
          to="Hero"
          smooth={true}
          offset={-100}
          duration={500}
          className="menuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="Experti"
          smooth={true}
          offset={-100}
          duration={500}
          className="menuListItem"
        >
          Experties
        </Link>
        <Link
          activeClass="active"
          to="Projects"
          smooth={true}
          offset={-60}
          duration={500}
          className="menuListItem"
        >
          Project
        </Link>
        <Link
          activeClass="active"
          to="Education"
          smooth={true}
          offset={-80}
          duration={500}
          className="menuListItem"
        >
          Education
        </Link>
      </div>
      <button
        className="menuBtn"
        onClick={() => {
          document
            .getElementById("Contacts")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src="./assets/contact.png" alt="" className="menuImg" />
        Contact Me
      </button>

      <img
        src="./assets/menu.png"
        alt=""
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="Hero"
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="Experti"
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Experties
        </Link>
        <Link
          activeClass="active"
          to="Projects"
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Project
        </Link>
        <Link
          activeClass="active"
          to="Education"
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Education
        </Link>
        <Link
          activeClass="active"
          to="Contacts"
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contacts
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
