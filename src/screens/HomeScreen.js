import { React, useEffect, useState, useLayoutEffect, useRef } from "react";
// import RectangularButton from "../component/UI/Buttons/RectangularButton";
import COLOR from "../contants/color";

export default function HomeScreen({ urlSesstionImg }) {
  const [isSmall, setIsSmall] = useState(false);
  const handleZoomImage = (e) => {
    if (!isSmall) {
      e.target.height = "70";
      e.target.width = "70";
    } else {
      e.target.height = "500";
      e.target.width = "500";
    }
    setIsSmall(!isSmall);
    console.log([e.target]);
  };
  useEffect(() => {
    const homeImg = document.querySelector(".home-section__img");
    homeImg.height = "300";
    homeImg.width = "300";

    // homeImg.style.animationIterationCount = "infinite";
    setTimeout(() => {
      homeImg.style.animation = "infiniteUpDown 4.9s infinite";
    }, 3000);
  }, []);

  return (
    <div className="home">
      <div>
        <div className="section__title">
          <span></span>
          <h3>Giới thiệu</h3>
        </div>
        <div className="home-section">
          <div className="row">
            <div className="col c-12 m-6 l-6">
              <div className="home-section__intro">
                <div className="intro-wrapper">
                  <h3 className="intro-wrapper__name">Hi</h3>
                </div>
                <div className="intro-wrapper">
                  <h3 className="intro-wrapper__name">Tôi là</h3>
                </div>
                <div className="intro-wrapper">
                  <h3 className="intro-wrapper__name">
                    <img
                      src="./images/logo.png"
                      alt="logo"
                      className="img-logo"
                    />
                    hân
                  </h3>
                </div>
                <div className="intro-wrapper">
                  <h3 className="intro-wrapper__major">Intern Front-end</h3>
                </div>
              </div>
            </div>
            <div className=" col c-12 m-6 l-6">
              <div>
                <div className="home-section__img-wrapper">
                  <img
                    src={urlSesstionImg}
                    className="home-section__img"
                    onClick={handleZoomImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
