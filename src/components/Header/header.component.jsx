import React, {useState} from 'react';
import './header.styles.scss'
import  Logo  from "../../assets/avater.png";
const Header = () =>{ 
  const [isClick, setClick] = useState(false);
  const handleClick = () => setClick(!isClick);
  const closeMenu = () => setClick(isClick)
  return (
    <nav className="header">
      <section>
        <span className="logo">
          <img src={Logo} alt="image" style={{height: '10vh'}}/>
        </span>
      </section>

      <section className={isClick ? "options active" : "options"}>
        <span className="about">About</span>
        <span className="cv">CV</span>
        <span>Projects</span>
      </section>

      <section className="mobile-view" onClick={handleClick}>
        {isClick ? (
          <span>
            <i className="fas fa-times fa-2x"></i>
          </span>
        ) : (
          <span>
            <i className="fas fa-hamburger fa-2x"></i>
          </span>
        )}
      </section>
    </nav>
  );};

export default Header;