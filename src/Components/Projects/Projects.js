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
        "Vestibulum vel risus eget enim pulvinar hendrerit et ac massa. Cras eu nibh tristique, lobortis tortor at, egestas sapien. Sed non metus quis velit porta viverra. Curabitur hendrerit libero vitae ipsum tincidunt sagittis.",
      tags: ["Wordpress", "jQuery"],
      github: "www.github.com",
      website: "www.ludifica.be",
      screen: "screenLudifica",
      partial: false,
      id: 1,
    },
    {
      title: "Socatra",
      type: "wordpress",
      description:
        "Vestibulum vel risus eget enim pulvinar hendrerit et ac massa. Cras eu nibh tristique, lobortis tortor at, egestas sapien. Sed non metus quis velit porta viverra. Curabitur hendrerit libero vitae ipsum tincidunt sagittis.",
      tags: ["Wordpress", "jQuery"],
      github: "",
      website: "www.socatra.be",
      screen: "screenSocatra",
      partial: false,
      id: 2,
    },
    {
      title: "Pixus",
      type: "wordpress",
      description:
        "Vestibulum vel risus eget enim pulvinar hendrerit et ac massa. Cras eu nibh tristique, lobortis tortor at, egestas sapien. Sed non metus quis velit porta viverra. Curabitur hendrerit libero vitae ipsum tincidunt sagittis.",
      tags: ["Wordpress", "jQuery", "Gsap", "BarbaJS"],
      github: "",
      website: "www.pixus.be",
      screen: "screenPixus",
      partial: false,
      id: 3,
    },
    {
      title: "Oystershell",
      type: "wordpress",
      description:
        "Vestibulum vel risus eget enim pulvinar hendrerit et ac massa. Cras eu nibh tristique, lobortis tortor at, egestas sapien. Sed non metus quis velit porta viverra. Curabitur hendrerit libero vitae ipsum tincidunt sagittis.",
      tags: ["Wordpress", "jQuery"],
      github: "",
      website: "www.oystershell.com",
      screen: "screenPixus",
      partial: false,
      id: 4,
    },
  ]);
  return (
    <section className="projects">
      <div className="container">
        <div className="projects__content">
          <h2 className="boldfont movingText">
            Works & Projects Works & Projects
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
