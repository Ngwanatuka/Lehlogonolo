import React from 'react';
import './Experience.css';
import checkmarkIcon from '../../assets/checkmark.png';
import Arrow from '../../assets/arrow.png';

const Experience = () => (
  <section id="experience">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Experience</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>Styled Component</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>Redux</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>CSS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>SASS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>JavaScript</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>React</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>Material UI</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Backend Development</h2>
          <div className="article-container">
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>Firebase</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>Node JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>Express JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>Postman</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={checkmarkIcon} alt="Experience icon" className="icon" />
              <div>
                <h3>MySQL</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <img
      src={Arrow}
      alt="Arrow icon"
      className="icon arrow"
      onClick={() => (window.location.href = './#projects')}
    />
  </section>
);

export default Experience;
