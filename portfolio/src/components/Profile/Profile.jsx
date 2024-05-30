import React from 'react';
import './Profile.css';
import myPic from '../../assets/myPic.png';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';

const Profile = () => (
  <section id="profile">
    <div className="section__pic-container">
      <img src={myPic} alt="Ngwanatuka Molepo profile picture" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello, I'm</p>
      <h1 className="title">Ngwanatuka Molepo</h1>
      <p className="section__text__p2">Frontend Developer</p>
      <div className="btn-container">
        <button
          className="btn btn-color-2"
          onClick={() => window.open('./assets/MyCV.docx')}
        >
          Download CV
        </button>
        <button
          className="btn btn-color-1"
          onClick={() => (window.location.href = './#contact')}
        >
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <img
          src={linkedinIcon}
          alt="My LinkedIn profile"
          className="icon"
          onClick={() => (window.location.href = 'https://www.linkedin.com/in/ngwanatuka-molepo-75b499259')}
        />
        <img
          src={githubIcon}
          alt="My Github profile"
          className="icon"
          onClick={() => (window.location.href = 'https://github.com/Ngwanatuka')}
        />
      </div>
    </div>
  </section>
);

export default Profile;
