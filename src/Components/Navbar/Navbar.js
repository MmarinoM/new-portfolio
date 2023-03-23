import React, { useRef, useState, useEffect } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hoverAnim = useRef(null);
  useEffect(() => {
    //scroll event listener
    window.addEventListener("scroll", () => {
      //get menuRef offsetTop
      const workSectionOffset =
        document.querySelector(".projects").offsetTop - 100;
      const skillsSectionOffset =
        document.querySelector(".skills").offsetTop - 200;
      console.log(workSectionOffset);
      console.log(skillsSectionOffset);
      console.log(window.scrollY);
      if (window.scrollY >= workSectionOffset) {
        menuRef.current.classList.add("current_2");
      }
      if (window.scrollY >= skillsSectionOffset) {
        menuRef.current.classList.remove("current_2");
        menuRef.current.classList.add("current_3");
      }
      if (window.scrollY < workSectionOffset) {
        menuRef.current.classList.remove("current_2");
        menuRef.current.classList.remove("current_3");
      }
    });
  }, []);
  const showMenu = (e) => {
    e.stopPropagation();
    if (isOpen) {
      menuRef.current.classList.remove("openMenu");
      hoverAnim.current.classList.remove("menu-mobile-container__bubble__open");
      setIsOpen(false);
    } else {
      hoverAnim.current.classList.add("menu-mobile-container__bubble__open");
      hoverAnim.current.classList.remove(
        "menu-mobile-container__bubble__hover"
      );
      setIsOpen(true);

      menuRef.current.classList.add("openMenu");
    }
  };
  const hideMenu = () => {};

  const enterMenu = () => {
    hoverAnim.current.classList.add("menu-mobile-container__bubble__hover");
  };

  const leaveMenu = () => {
    hoverAnim.current.classList.remove("menu-mobile-container__bubble__hover");
  };
  return (
    <nav>
      <div className="menu-mobile">
        <div
          className="barContainer"
          onClick={showMenu}
          onMouseEnter={enterMenu}
          onMouseLeave={leaveMenu}
        >
          <div className="yellow-bar menu-bar"></div>
          <div className="purple-bar menu-bar"></div>
          <div className="blue-bar menu-bar"></div>
        </div>
        <div className="close-menu" onClick={hideMenu}></div>
      </div>
      <div className="menu-mobile-container">
        <div className="menu-mobile-container__bubble" ref={hoverAnim}></div>
        <ul ref={menuRef} className="current">
          <li>
            <a href="#about" className="boldfont menu-mobile-elem yellow">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="boldfont menu-mobile-elem purple">
              Works
            </a>
          </li>
          <li>
            <a href="#skills" className="boldfont menu-mobile-elem purplePink">
              Skills
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
