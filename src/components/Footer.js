import PropTypes from "prop-types";
import React from 'react';
import "./Footer.css";

const Footer = ({ className = "" }) => {
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
          alt=""
          src="./pearsonhardman2/vector-23.svg"
        />
        <div className="navigation">
          <div className="about">
            <div className="social-media">
              <img
                className="akar-iconsfacebook-fill"
                loading="lazy"
                alt=""
                src="./pearsonhardman2/akariconsfacebookfill.svg"
              />
              <img
                className="akar-iconslinkedin-box-fill"
                loading="lazy"
                alt=""
                src="./pearsonhardman2/akariconslinkedinboxfill.svg"
              />
              <img
                className="akar-iconstwitter-fill"
                loading="lazy"
                alt=""
                src="./pearsonhardman2/akariconstwitterfill.svg"
              />
              <img
                className="ant-designinstagram-filled-icon"
                loading="lazy"
                alt=""
                src="./pearsonhardman2/antdesigninstagramfilled.svg"
              />
            </div>
          </div>
          <div className="pages">
            <div className="page">Page</div>
            <div className="page-list">
              <div className="cases">Cases</div>
              <div className="news">News</div>
            </div>
          </div>
          <div className="footer-links">
            <div className="links">Links</div>
            <div className="link-list">
              <div className="term-of-use">Term of use</div>
              <a className="privacy-policy">Privacy Policy</a>
            </div>
          </div>
          <div className="contact">
            <div className="contact-info">
              <div className="contact-details">
                <img
                  className="call-icon"
                  loading="lazy"
                  alt=""
                  src="./pearsonhardman2/call.svg"
                />
                <div className="contact-values">+613 890 7232</div>
              </div>
              <div className="contact-details1">
                <img
                  className="location-icon"
                  loading="lazy"
                  alt=""
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
                  alt=""
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
          alt=""
          src="./pearsonhardman2/vector-24.svg"
        />
        <div className="copyright-2022-northman-container">
          <span>{`Copyright @2024 `}</span>
          <b>Pearson Hardman</b>
          <span> All Right Reserved</span>
        </div>
      </section>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;