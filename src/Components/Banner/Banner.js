import React from "react";
import "./Banner.scss";
import gsap from "gsap";
import { useRef, useEffect } from "react";
// import frontEnd from "../../assets/front-end.svg";
import { ReactComponent as Logo } from "../../assets/github.svg";
import { ReactComponent as LogoLinkedin } from "../../assets/linkedin.svg";
import { ReactComponent as LogoEmail } from "../../assets/email.svg";
// import TypeAnimation from "react-type-animation";
export default function Banner() {
  const tl = useRef();
  useEffect(() => {
    let animating = false;
    tl.current = gsap.timeline({
      onComplete: () => {
        animating = false;
      },
    });
    tl.current
      .fromTo(
        ".bubblemove.purple",
        {
          opacity: 0,
          ease: "power3.out",
        },
        {
          opacity: 1,
          y: 0,
        }
      )
      .fromTo(
        ".bubblemove.blue",
        {
          opacity: 0,
          ease: "power3.out",
        },
        {
          opacity: 1,
          y: 0,
        },
        "-=0.2"
      )
      .fromTo(
        ".bubblemove.yellow",
        {
          opacity: 0,
          ease: "power3.out",
        },
        {
          opacity: 1,
          y: 0,
        }
      )
      .staggerFromTo(
        ".stag",
        0.3,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
        },
        0.2,
        "-=0.5"
      )
      .staggerFromTo(
        ".calque_anim",
        0.5,
        {
          opacity: 0,
          scale: 0.3,
        },
        {
          opacity: 1,
          scale: 1,
        },
        0.2,
        "-=0.5"
      )
      .fromTo(
        ".logo",
        2,
        {
          opacity: 0,
          ease: "power3.out",
        },
        {
          opacity: 1,
        },
        "-=1.5"
      )
      .staggerFromTo(
        ".menu-bar",
        1,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          ease: "power3.out",
        },
        0.1,
        "-=2"
      )
      .fromTo(
        "section",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
        },
        "-=0.5"
      );
  });

  return (
    <div className="banner">
      <div className="bubblemove yellow"></div>
      <div className="bubblemove purple"></div>
      <div className="bubblemove blue"></div>
      <div className="container">
        <div className="banner__content">
          <div className="banner__aboutContent">
            <span className="consola frontend stag">FRONT END DEVELOPER</span>
            <h1 className="boldfont stag">
              <span>Michael</span>
              <br />
              <span>Marino</span>
              {/* <img src={frontEnd} alt="" className="front-end" /> */}
            </h1>
            <p className="consola about stag">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Saepnesciunt totam tenetur ex, quod dicta ipsum eveniet expedita
              mollitia aperiam soluta cupiditate quibusdam aut illo similique
              sit accusantium natus? Reiciendis? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Saepe nesciunt totam tenetur ex,
              quod dicta ipsum eveniet expedita mollitia aperiam soluta
              cupiditate quibusdam aut illo similique sit accusantium natus?
              Reiciendis?
            </p>
          </div>
          <div className="banner__imgContainer">
            <Logo />
            <LogoLinkedin />
            <LogoEmail />
          </div>
        </div>
      </div>
    </div>
  );
}
