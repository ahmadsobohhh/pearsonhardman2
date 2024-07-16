import FrameComponent10 from "../components/FrameComponent10";
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

const Homepage = () => {
  return (
    <div className="homepage-1">
      <section className="homepage-1-inner">
        <div className="frame-parent">
          <div className="mask-group-parent">
            <img
              className="mask-group-icon"
              loading="lazy"
              alt=""
              src="/mask-group@2x.png"
            />
            <div className="uphold-your-justice-container">
              <span>{`Uphold Your justice With `}</span>
              <span className="pearson-hardman">{`Pearson Hardman `}</span>
              <span>Law Firm</span>
            </div>
          </div>
          <button className="s">
            <div className="get-started">Get started</div>
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
                  Take a look at our law firm and what we do. Founded in 1752, before Canadian Independence, Pearson Hardman remains the best law firm on Earth.
                </p>
              </div>
              <div className="frame-container">
                <button className="see-detail-wrapper">
                  <div className="see-detail">See detail</div>
                </button>
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
                maskGroup="/mask-group-13@2x.png"
                propPadding="unset"
              />
              <SuccessStoryItems
                maskGroup="/mask-group-14@2x.png"
                propPadding="unset"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
