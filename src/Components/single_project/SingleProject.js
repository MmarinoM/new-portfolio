import React from "react";
import { useRef } from "react";
import "./SingleProject.scss";
// import screenLudifica from "../../assets/screen-ludifica.png";
// import screenSocatra from "../../assets/screen-socatra.png";
// import logoReact from "../../assets/react.svg";
// import logoAngular from "../../assets/angular.svg";
// import logoVue from "../../assets/vuejs.svg";
// import logoWordpress from "../../assets/wordpress.svg";
// import seeIcon from "../../assets/eye.svg";
// import githubIcon from "../../assets/github.svg";
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
    <div
      className="singleProject"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="singleProject__screen">
        <video loop muted width="100%" src={video} ref={videoRef}></video>
      </div>
      <div className="singleProject__info">
        <h2 className="boldfont">{props.single.title}</h2>
        <p className="consola">{props.single.description}</p>
        <div className="singleProject__info__tags">
          {props.single.tags.map((tag) => (
            <span className="consola">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
