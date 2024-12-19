import React, { useEffect } from 'react';
import './Skills.scss';
import skill1 from '../../assets/skill/skill1.svg';
import skill2 from '../../assets/skill/skill2.svg';
import skill3 from '../../assets/skill/skill3.svg';
import skill4 from '../../assets/skill/skill4.svg';
// import skill5 from "../../assets/skill/skill5.svg";
import skill6 from '../../assets/skill/skill6.svg';
import skill7 from '../../assets/skill/skill7.svg';
import skill8 from '../../assets/skill/skill8.svg';
import skill9 from '../../assets/skill/skill9.svg';
import skill10 from '../../assets/skill/skill10.svg';
import skill11 from '../../assets/skill/skill11.svg';
import skill12 from '../../assets/skill/skill12.svg';
import skill13 from '../../assets/skill/skill13.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  function shuffleIcons() {
    const icons = document.querySelectorAll('.skills__content__icon');
    const iconArray = Array.from(icons);
    return iconArray;
  }
  function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  useEffect(() => {
    gsap.utils.toArray('.skills').forEach((section) => {
      const icons = shuffleIcons();
      const shuffledIcons = shuffleArray(icons);

      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        onEnter: () => {
          gsap.to(shuffledIcons, {
            duration: 1,
            opacity: 1,
            y: 0,
            stagger: 0.2,
          });
        },
      });
    });
  }, []);
  return (
    <section className="skills">
      <div className="container">
        <div className="skills__content">
          <h2 className="boldfont movingText">
            ■ Skills ■ Competences ■ Skills ■ Competences ■ Skills ■ Competences
          </h2>
          <h2 className="boldfont movingText movingTextSecond">
            ■ Skills ■ Competences ■ Skills ■ Competences ■ Skills ■ Competences
          </h2>
          <div className="skills__content__icon skills__content__icon1">
            <img src={skill1} alt="skill1" className="skillIcon skillIcon1" />
            <p>React</p>
          </div>
          <div className="skills__content__icon skills__content__icon2">
            <img src={skill2} alt="skill2" className="skillIcon skillIcon2" />
            <p>VueJs</p>
          </div>
          <div className="skills__content__icon skills__content__icon3">
            <img src={skill3} alt="skill3" className="skillIcon skillIcon3" />
            <p>Javascript</p>
          </div>
          <div className="skills__content__icon skills__content__icon4">
            <img src={skill4} alt="skill4" className="skillIcon skillIcon4" />
            <p>Typescript</p>
          </div>
          <div className="skills__content__icon skills__content__icon6">
            <img src={skill6} alt="skill6" className="skillIcon skillIcon6" />
            <p>Gsap</p>
          </div>
          <div className="skills__content__icon skills__content__icon8">
            <img src={skill8} alt="skill8" className="skillIcon skillIcon8" />
            <p>Wordpress</p>
          </div>
          <div className="skills__content__icon skills__content__icon9">
            <img src={skill9} alt="skill9" className="skillIcon skillIcon9" />
            <p>Scss</p>
          </div>
          <div className="skills__content__icon skills__content__icon10">
            <img
              src={skill10}
              alt="skill10"
              className="skillIcon skillIcon10"
            />
            <p>GitHub</p>
          </div>
          <div className="skills__content__icon skills__content__icon11">
            <img
              src={skill11}
              alt="skill11"
              className="skillIcon skillIcon11"
            />
            <p>PHP</p>
          </div>
          <div className="skills__content__icon skills__content__icon12">
            <img
              src={skill12}
              alt="skill12"
              className="skillIcon skillIcon12"
            />
            <p>Node</p>
          </div>
          <div className="skills__content__icon skills__content__icon13">
            <img
              src={skill13}
              alt="skill13"
              className="skillIcon skillIcon13"
            />
            <p>Figma</p>
          </div>
          <div className="skills__content__icon skills__content__icon7">
            <img src={skill7} alt="skill7" className="skillIcon skillIcon7" />
            <p>Illustrator</p>
          </div>
        </div>
      </div>
    </section>
  );
}
