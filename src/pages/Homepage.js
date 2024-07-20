import React from 'react';
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import CTA from "../components/CTA";
import FrameComponent3 from "../components/FrameComponent3";
import Attorney from "../components/Attorney";
import Lawyers from "../components/Lawyers";
import SuccessStoryItems from "../components/SuccessStoryItems";
import "./Homepage.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';
import Footer from "../components/Footer";

const Homepage = () => {
  const { language } = useLanguage();

  return (
    <div className="homepage-1">
      <section className="homepage-1-inner">
        <div className="frame-parent">
          <div className="mask-group-parent">
            <img
              className="mask-group-icon"
              loading="lazy"
              alt=""
              src="./pearsonhardman2/mask-group@2x.png"
            />
            <div className="uphold-your-justice-container">
              <span>{translations[language].welcomeMessage}</span>
            </div>
          </div>
          <button className="s">
            <div className="get-started">{translations[language].getStarted}</div>
          </button>
        </div>
      </section>
      <section className="homepage-1-child">
        <div className="frame-group">
          <FrameComponent9 />
          <div className="frame-wrapper">
            <div className="lorem-ipsum-dolor-sit-amet-con-parent">
              <div className="lorem-ipsum-dolor-container">
                <p className="blank-line">&nbsp;</p>
                <p className="cum-mattis-mollis">
                  {translations[language].establishedText}
                </p>
              </div>
              <div className="frame-container">
              </div>
            </div>
          </div>
          <FrameComponent7 />
        </div>
      </section>
      <FrameComponent6 />
      <FrameComponent5 />
      <CTA />
      <section className="frame-section">
        <div className="frame-div">
          <FrameComponent3 />
          <Attorney />
          <Lawyers />
          <div className="duplicate-stories">
            <div className="duplicate-stories-container">
              <SuccessStoryItems
                maskGroup="./pearsonhardman2/mask-group-13@2x.png"
                propPadding="unset"
              />
              <SuccessStoryItems
                maskGroup="./pearsonhardman2/mask-group-14@2x.png"
                propPadding="unset"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
