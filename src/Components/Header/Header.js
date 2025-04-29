import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.scss';
import imgLogo from '../../assets/test.svg';

export default function Header() {
  return (
    <header>
      <div className="navContainer"></div>
      <div className="container">
        <a
          href="https://mm-cv-portfolio.netlify.app/"
          className="logo"
          target="_self"
        >
          <img src={imgLogo} alt="logo" />
        </a>
        <Navbar />
      </div>
    </header>
  );
}
