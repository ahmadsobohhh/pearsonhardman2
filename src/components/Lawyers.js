import NewsItems from "./NewsItems";
import SuccessStoryItems from "./SuccessStoryItems";
import PropTypes from "prop-types";
import "./Lawyers.css";

const Lawyers = ({ className = "" }) => {
  return (
    <div className={`lawyers ${className}`}>
      <div className="lawyers-container">
        <div className="lawyer2">Lawyer</div>
        <div className="lawyers-description">
          <div className="professional-lawyers-and">
            Professional lawyers and advisors with more experience
          </div>
          <div className="lawyers-more">
            <div className="lorem-ipsum-dolor5">
              See our pick of our best uOttawa Alumni educated lawyers, ranked #1 on Earth.
            </div>
          </div>
        </div>
      </div>
      <div className="news-container-parent">
        <div className="news-container">
          <div className="news-content">
            <img
              className="mask-group-icon10"
              loading="lazy"
              alt=""
              src="/mask-group-8@2x.png"
            />
            <div className="news-content-inner">
              <div className="news-title-parent">
                <div className="news-title">
                  <div className="lawyer-name-container">
                    <div className="jeniffer-smith">Jeniffer Smith</div>
                    <div className="lawyer-position-container">
                      <div className="senior-business-lawyer1">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news">News</div>
              </div>
            </div>
          </div>
          <div className="news-grid">
            <NewsItems
              maskGroup="/mask-group-9@2x.png"
              nadaGeomorgant="Nada Geoant"
            />
            <NewsItems
              maskGroup="/mask-group-10@2x.png"
              nadaGeomorgant="Desy Willy"
              propHeight="602px"
            />
          </div>
        </div>
        <div className="news-more">
          <div className="news-more-content">
            <div className="the-latest-news-container">
              <p className="the-latest-news">{`The latest news `}</p>
              <p className="and-blog-from">and blog from Pearson Hardman</p>
            </div>
            <div className="news-more-link">
              <div className="news-more-link-container">
                <div className="see-more1">See more</div>
                <img
                  className="arrow-right-35"
                  loading="lazy"
                  alt=""
                  src="/arrow--right-3-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="success-stories">
        <div className="success-stories-container">
          <SuccessStoryItems maskGroup="/mask-group-11@2x.png" />
          <SuccessStoryItems
            maskGroup="/mask-group-12@2x.png"
            propPadding="unset"
          />
        </div>
      </div>
    </div>
  );
};

Lawyers.propTypes = {
  className: PropTypes.string,
};

export default Lawyers;
