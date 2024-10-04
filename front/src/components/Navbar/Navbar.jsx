import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import "./Navbar.css";

const pages = [
  { id: 0, name: "About", path: "about" },
  { id: 1, name: "Eventos", path: "events" },
  { id: 2, name: "Clases", path: "class" },
  { id: 3, name: "Fitness", path: "fitness" },
  { id: 4, name: "Gallery", path: "galery" },
  { id: 5, name: "Shop", path: "shop" },
]

/*const settings = [
  { id: 1, name: 'Profile', path: 'profile'}, 
  { id: 2, name: 'Configuración', path: 'config'}, 
  { id: 3, name: 'Mis eventos', path: 'my-events'}, 
  { id: 4, name: 'Mis clases', path: 'my-classes'}, 
  { id: 5, name: 'Mis compras', path: 'my-purchases'},
  { id: 6, name: 'Logout', path: 'logout'},
];*/

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar ">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        
        {pages.map((page) => (
          <li key={page.id} className="h__subtitle">
            <Link to={`/${page.path}`}>{page.name}</Link>
          </li>
        ))}
        
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
