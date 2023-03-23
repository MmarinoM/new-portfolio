import React, { useRef, useEffect } from "react";
import { useState } from "react";
import "./Projects.scss";
import SingleProject from "../single_project/SingleProject";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    revealRefs.current.push(el);
  };
  // const q = gsap.utils.selector(revealRefs);
  // const tl = useRef();
  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      console.log(index);
      const q = gsap.utils.selector(el);
      if ((index + 1) % 2 === 0) {
        gsap.fromTo(
          q(".singleProject__screen"),
          {
            opacity: 0,
            x: 100,
          },
          {
            duration: 1,
            autoAlpha: 1,

            x: 0,
            scrollTrigger: {
              id: `project-${index + 1}`,
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none pause",
            },
          }
        );
      } else {
        gsap.fromTo(
          q(".singleProject__screen"),
          {
            opacity: 0,
            x: -100,
          },
          {
            duration: 1,
            autoAlpha: 1,

            x: 0,
            scrollTrigger: {
              id: `project-${index + 1}`,
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none pause",
            },
          }
        );
      }
      // gsap.fromTo(
      //   q(".singleProject__info"),
      //   {
      //     opacity: 0,
      //     y: 100,
      //   },
      //   {
      //     duration: 1,
      //     autoAlpha: 1,

      //     y: 0,
      //     zIndex: 10,
      //     scrollTrigger: {
      //       id: `project-${index + 1}`,
      //       trigger: el,
      //       start: "top 80%",
      //       toggleActions: "play none none pause",
      //     },
      //   }
      // );
    });
  });
  const [projectArr] = useState([
    {
      title: "Ludifica",
      type: "wordpress",
      description:
        "I made a QR game for clients containing sound-based games, puzzles & quizzes. I also made a statistics interface for customers to track players.",
      tags: ["Angular", "Typescript"],
      github: "www.github.com",
      website: "https://www.ludifica.be",
      screen: "ludifica",
      video: "ludifica",
      partial: false,
      id: 1,
    },
    {
      title: "Monizze",
      type: "wordpress",
      description:
        "I made a QR game for clients containing sound-based games, puzzles & quizzes. I also made a statistics interface for customers to track players.",
      tags: ["Wordpress", "jQuery", "Gutenberg"],
      github: "www.github.com",
      website: "https://www.monizze.be",
      screen: "monizze",
      video: "monizze",
      partial: false,
      id: 0,
    },
    {
      title: "Pixus",
      type: "wordpress",
      description:
        "Pixus is an online tool that allows other teachers to discover the Freinet pedagogy. The site allows you to discover several lessons in video and to follow the progress of the project on the blog.",
      tags: ["Wordpress", "jQuery", "Gsap", "BarbaJS"],
      github: "",
      website: "https://www.pixus.be",
      screen: "pixus",
      video: "pixus",
      partial: false,
      id: 3,
    },
    {
      title: "Socatra",
      type: "wordpress",
      description:
        "I made this site for a construction company which gathers the last achievements of the company as well as their job offers and their last news.",
      tags: ["Wordpress", "jQuery"],
      github: "",
      website: "https://www.socatra.be",
      screen: "socatra",
      video: "socatra",
      partial: false,
      id: 2,
    },
    {
      title: "Accent",
      type: "wordpress",
      description:
        "I made this wordpress site for a company that gives language courses for companies or individuals.",
      tags: ["Wordpress", "jQuery", "Gsap"],
      github: "",
      website: "https://www.accentlang.com",
      screen: "accent",
      video: "accent",
      partial: false,
      id: 4,
    },
    {
      title: "Lexing",
      type: "wordpress",
      description:
        "The website of this law firm allows you to discover the team, to make an appointment with lawyers or to buy legal documents via woocomerce.",
      tags: ["Wordpress", "jQuery", "Woocomerce"],
      github: "",
      website: "https://www.lexing.be",
      screen: "lexing",
      video: "lexing",
      partial: false,
      id: 4,
    },
  ]);
  return (
    <section className="projects">
      <div className="container">
        <div className="projects__content">
          <h2 className="boldfont movingText">
            ■ Works ■ Projects ■ Works ■ Projects ■ Works ■ Projects
          </h2>
          <h2 className="boldfont movingText movingTextSecond">
            ■ Works ■ Projects ■ Works ■ Projects ■ Works ■ Projects
          </h2>
          {projectArr.map((project) => (
            <div
              key={project.id}
              id={"project-" + project.id}
              className="singleProjectAnimation"
              ref={addToRefs}
            >
              <SingleProject single={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
