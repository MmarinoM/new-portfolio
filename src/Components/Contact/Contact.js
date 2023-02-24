import React, { useRef } from "react";
import "./Contact.scss";
import send from "../../assets/send.svg";
import gsap from "gsap";

export default function Contact() {
  const letterRef = useRef(null);
  const tl = useRef();
  const q = gsap.utils.selector(letterRef);
  let animating = false;
  const hoverLetter = () => {
    tl.current = gsap.timeline({
      onComplete: () => {
        animating = false;
      },
    });
    if (!animating) {
      animating = true;
      tl.current
        .to(q(".gsap-letter"), {
          duration: 3,
          x: 530,
          y: -100,
          rotate: 30,
          scale: 1.2,
          ease: "power3.out",
        })
        .to(
          q(".textContact"),
          {
            duration: 0.5,
            opacity: 1,
          },
          "-=3"
        )
        .to(
          q(".gsap-letter"),
          {
            y: 300,
            // x: 360,
            rotate: 120,
            duration: 1,
          },
          "-=1"
        )
        .to(q(".textContact"), {
          duration: 0.5,
          opacity: 0,
        })
        .set(q(".gsap-letter"), {
          opacity: 0,
          y: 0,
          x: 0,
          rotate: 0,
          scale: 1,
        })
        .to(q(".gsap-letter"), {
          opacity: 1,
          duration: 0.5,
        });
    }
  };
  const leaveHover = () => {
    if (animating) {
      tl.current.resume();
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__content">
          <h2 className="boldfont">Contact</h2>
          <div className="contact__txt">
            <p className="consola">
              Vestibulum vel risus eget enim pulvinar hendrerit et ac massa.
              Cras eu nibh tristique, lobortis tortor at, egestas sapien. Sed
              non metus quis velit porta viverra. Curabitur hendrerit libero
              vitae ipsum tincidunt sagittis.
            </p>
            <button
              ref={letterRef}
              onMouseEnter={hoverLetter}
              onMouseLeave={leaveHover}
            >
              {" "}
              <span className="textContact">Email Me</span>
              <img className="gsap-letter" src={send} alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
