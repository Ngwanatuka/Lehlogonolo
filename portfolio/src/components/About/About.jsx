import React from 'react';
import './About.css';
import aboutPic from '../../assets/about-pic.png';
import experienceIcon from '../../assets/experience.png';
import educationIcon from '../../assets/education.png';
import Arrow from '../../assets/arrow.png';

const About = () => (
  <section id="about">
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
      <div className="section__pic-container">
        <img src={aboutPic} alt="Profile picture" className="about-pic" />
      </div>
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <img src={experienceIcon} alt="Experience icon" className="icon" />
            <h3>Experience</h3>
            <p>0+ years <br />Frontend Development</p>
          </div>
          <div className="details-container">
            <img src={educationIcon} alt="Education icon" className="icon" />
            <h3>Education</h3>
            <p>Certification in Software Development from <br />ALX AFRICA</p>
          </div>
        </div>
        <div className="text-container">
          <p>
            Highly skilled Front-End Developer with a strong background in modern JavaScript frameworks, advanced HTML/CSS, and React. Experienced in both front-end and back-end development, with a comprehensive understanding of software design, testing, and user authentication. Adept at collaborating in team environments, with proven technical writing and time management skills.
          </p>
        </div>
      </div>
    </div>
    <img
      src={Arrow}
      alt="Arrow icon"
      className="icon arrow"
      onClick={() => (window.location.href = './#experience')}
    />
  </section>
);

export default About;
