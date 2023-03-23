import React from "react";
import "./Banner.scss";
import gsap from "gsap";
import { useRef, useEffect } from "react";
// import frontEnd from "../../assets/front-end.svg";
import { ReactComponent as Logo } from "../../assets/github.svg";
import { ReactComponent as LogoLinkedin } from "../../assets/linkedin.svg";
import { ReactComponent as LogoEmail } from "../../assets/email.svg";
import { ReactComponent as LogoResume } from "../../assets/resume.svg";
import pdfCv from "../../assets/mam-cv.pdf";
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
        0.3,
        {
          opacity: 0,
          scale: 0.3,
        },
        {
          opacity: 1,
          scale: 1,
        },
        0.15,
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
            <span className="consola frontend stag">WEB DEVELOPER</span>
            <h1 className="boldfont stag">
              <span>Michael</span>
              <br />
              <span>Marino</span>
              {/* <img src={frontEnd} alt="" className="front-end" /> */}
            </h1>
            <p className="consola about stag">
              Hi! I’m Michael. I’m 33, I’m a front-end developer based in Liège,
              Belgium. I worked in a web agency where I developed websites and
              mobile applications for customers. I love both code and design.
              I’m currently honing my react skills. When I’m not coding, I like
              listen to a loooooot of music and play some squash or basketball.
              On weekends, I tend to morph into a hard-core Inter Milan fan.
            </p>
          </div>
          <div className="banner__imgContainer">
            <a
              href="https://github.com/MmarinoM"
              target="_blank"
              rel="noreferrer"
            >
              <Logo />
            </a>
            <a
              href="https://www.linkedin.com/in/marino-m/"
              target="_blank"
              rel="noreferrer"
            >
              <LogoLinkedin />
            </a>
            {/* mailto: marino.michael.1990@gmail.com */}
            <a
              href="mailto:marino.michael.1990@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <LogoEmail />
            </a>
            <a href={pdfCv} target="_blank" rel="noreferrer">
              <LogoResume />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
