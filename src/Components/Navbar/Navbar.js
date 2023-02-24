import React, { useRef } from "react";
import "./Navbar.scss";
import gsap from "gsap";

export default function Navbar() {
  const menuRef = useRef(null);
  const menuMobileRef = useRef(null);
  const tl = useRef();
  const q = gsap.utils.selector(menuRef);
  const q2 = gsap.utils.selector(menuMobileRef);
  let animating = false;
  const showMenu = (e) => {
    e.stopPropagation();
    console.log(animating);
    console.log("first click");
    tl.current = gsap.timeline({
      onComplete: () => {
        animating = false;
      },
    });
    if (!animating) {
      animating = true;
      tl.current
        .set(q(".close-menu"), {
          autoAlpha: 0,
        })
        .set(q(".menu-mobile-elem"), {
          x: 1000,
        })
        .set(q(".menu-mobile-container"), {
          display: "block",
        })
        .to(q(".yellow-bar"), {
          x: 100,
          duration: 0.5,
          ease: "power3.out",
        })
        .to(
          q(".purple-bar"),
          {
            x: 100,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          q(".blue-bar"),
          {
            x: 100,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          q(".menu-mobile-container"),
          {
            autoAlpha: 1,
            duration: 0.8,
          },
          "-=1"
        )
        .to(
          q(".close-menu"),
          {
            autoAlpha: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(q(".menu-mobile-elem.yellow"), {
          x: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .to(
          q(".menu-mobile-elem.purple"),
          {
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          q(".menu-mobile-elem.blue"),
          {
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }
  };
  const hideMenu = () => {
    console.log(animating);
    if (!animating) {
      animating = true;
      tl.current
        .set(q(".close-menu"), {
          autoAlpha: 0,
        })
        .to(q(".yellow-bar"), {
          x: 100,
          duration: 0.5,
          ease: "power3.out",
        })
        .to(
          q(".purple-bar"),
          {
            x: 100,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          q(".blue-bar"),
          {
            x: 100,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          q(".close-menu"),
          {
            autoAlpha: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .reversed(true);
    }
  };
  return (
    <nav ref={menuRef}>
      <div className="menu-mobile">
        <div className="barContainer" onClick={showMenu}>
          <div className="yellow-bar menu-bar"></div>
          <div className="purple-bar menu-bar"></div>
          <div className="blue-bar menu-bar"></div>
        </div>
        <div className="close-menu" onClick={hideMenu}></div>
      </div>
      <div className="menu-mobile-container">
        <ul>
          <li>
            <a href="#home" className="boldfont menu-mobile-elem yellow">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="boldfont menu-mobile-elem purple">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="boldfont menu-mobile-elem blue">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
