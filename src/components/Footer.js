import PropTypes from "prop-types";
import React from 'react';
import "./Footer.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const Footer = ({ className = "" }) => {
  const { language } = useLanguage();

  return (
    <div className={`footer ${className}`}>
      <section className="main">
        <div className="brand">
          <img className="g22-icon" loading="lazy" alt="" src="./pearsonhardman2/g22.svg" />
          <a className="northman">Pearson Hardman</a>
        </div>
        <img
          className="header-icon"
          loading="lazy"
          alt="header-icon"
          src="./pearsonhardman2/vector-23.svg"
        />
        <div className="navigation">
          <div className="about">
            <div className="social-media">
              <img
                className="akar-iconsfacebook-fill"
                loading="lazy"
                alt="header-icon"
                src="./pearsonhardman2/akariconsfacebookfill.svg"
              />
              <img
                className="akar-iconslinkedin-box-fill"
                loading="lazy"
                alt="header-icon"
                src="./pearsonhardman2/akariconslinkedinboxfill.svg"
              />
              <img
                className="akar-iconstwitter-fill"
                loading="lazy"
                alt="header-icon"
                src="./pearsonhardman2/akariconstwitterfill.svg"
              />
              <img
                className="ant-designinstagram-filled-icon"
                loading="lazy"
                alt="header-icon"
                src="./pearsonhardman2/antdesigninstagramfilled.svg"
              />
            </div>
          </div>
          <div className="pages">
            <div className="page">{translations[language].page}</div>
            <div className="page-list">
              <div className="cases">{translations[language].cases}</div>
              <div className="news">News</div>
            </div>
          </div>
          <div className="footer-links">
            <div className="links">{translations[language].links}</div>
            <div className="link-list">
              <div className="term-of-use">{translations[language].termOfUse}</div>
              <a className="privacy-policy">{translations[language].privacyPolicy}</a>
            </div>
          </div>
          <div className="contact">
            <div className="contact-info">
              <div className="contact-details">
                <img
                  className="call-icon"
                  loading="lazy"
                  alt="call-icon"
                  src="./pearsonhardman2/call.svg"
                />
                <div className="contact-values">+613 890 7232</div>
              </div>
              <div className="contact-details1">
                <img
                  className="location-icon"
                  loading="lazy"
                  alt="location-icon"
                  src="./pearsonhardman2/location.svg"
                />
                <div className="mechanic-rdmiami-fl">
                  +7889 uOttawa Rd, ON K2R 0A1
                </div>
              </div>
              <div className="contact-details2">
                <img
                  className="message-icon"
                  loading="lazy"
                  alt="message-icon"
                  src="./pearsonhardman2/message.svg"
                />
                <div className="northmanlawdomaincom">
                  PearsonHardman@domain.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="header-icon1"
          loading="lazy"
          alt="header-icon"
          src="./pearsonhardman2/vector-24.svg"
        />
        <div className="copyright-2022-northman-container">
          <span>{translations[language].copyright}</span>
        </div>
      </section>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
