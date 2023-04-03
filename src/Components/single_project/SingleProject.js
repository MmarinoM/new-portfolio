import React from "react";
import { useRef } from "react";
import "./SingleProject.scss";
import screenLudifica from "../../assets/ludifica.jpg";
import screenMonizze from "../../assets/monizze.jpg";
import screenLexing from "../../assets/lexing.jpg";
import screenPixus from "../../assets/pixus.jpg";
import screenSocatra from "../../assets/socatra.jpg";
import screenAccent from "../../assets/accent.jpg";
import screenGit from "../../assets/gitbg.jpg";
import ludifica from "../../assets/vid.mp4";
import pixus from "../../assets/pixus.mp4";
import socatra from "../../assets/socatra.mp4";
import accent from "../../assets/accent.mp4";
import lexing from "../../assets/lexing.mp4";
import monizze from "../../assets/monizze.mp4";
import comingSoon from "../../assets/comingsoon.jpg";

export default function SingleProject(props) {
  const videoRef = useRef(null);

  const handleHover = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  const getImgImport = (img) => {
    switch (img) {
      case "ludifica":
        return screenLudifica;
      case "monizze":
        return screenMonizze;
      case "lexing":
        return screenLexing;
      case "pixus":
        return screenPixus;
      case "socatra":
        return screenSocatra;
      case "accent":
        return screenAccent;
      case "github":
        return screenGit;
      default:
        return screenLudifica;
    }
  };

  const getVideoImport = (video) => {
    switch (video) {
      case "pixus":
        return pixus;
      case "ludifica":
        return ludifica;
      case "socatra":
        return socatra;
      case "accent":
        return accent;
      case "lexing":
        return lexing;
      case "monizze":
        return monizze;
      case "comingsoon":
        return comingSoon;
      default:
        return ludifica;
    }
  };

  return (
    <div
      className="singleProject"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <a href={props.single.website} className="singleProject__screen">
        <div
          className="singleProject__screen__before"
          style={{
            backgroundImage: `url(${getImgImport(props.single.screen)})`,
          }}
        ></div>
        {getVideoImport(props.single.video) !== comingSoon ? (
          <video
            loop
            muted
            width="100%"
            src={getVideoImport(props.single.video)}
            ref={videoRef}
          ></video>
        ) : (
          <img src={comingSoon} alt="coming soon" />
        )}
      </a>
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
