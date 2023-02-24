import React from "react";
import { useRef } from "react";
import "./SingleProject.scss";
import screenLudifica from "../../assets/screen-ludifica.png";
import screenSocatra from "../../assets/screen-socatra.png";
import logoReact from "../../assets/react.svg";
import logoAngular from "../../assets/angular.svg";
import logoVue from "../../assets/vuejs.svg";
import logoWordpress from "../../assets/wordpress.svg";
import seeIcon from "../../assets/eye.svg";
import githubIcon from "../../assets/github.svg";
import video from "../../assets/vid.mp4";

export default function SingleProject(props) {
  const videoRef = useRef(null);

  const handleHover = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <div className="singleProject">
      <div
        className="singleProject__screen"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <video loop muted width="100%" src={video} ref={videoRef}></video>
        <div className="icon__container">
          {props.single.github && (
            <a href={props.single.github} className="btn btn__github">
              <img src={githubIcon} alt="See the github" />
            </a>
          )}
          {props.single.website && (
            <a href={props.single.website} className="btn btn__see">
              <img src={seeIcon} alt="See the website" />
            </a>
          )}
        </div>
      </div>
      <div className="singleProject__info">
        <h2 className="boldfont">{props.single.title}</h2>
        <p className="consola">{props.single.description}</p>
        <div className="singleProject__info__tags">
          {props.single.tags.map((tag) => (
            <span className="consola">{tag}</span>
          ))}
        </div>
        <div className="singleProject__logo">
          {props.single.type === "react" && <img src={logoReact} alt="" />}
          {props.single.type === "angular" && <img src={logoAngular} alt="" />}
          {props.single.type === "vue" && <img src={logoVue} alt="" />}
          {props.single.type === "wordpress" && (
            <img src={logoWordpress} alt="" />
          )}
        </div>
      </div>
    </div>
  );
}
