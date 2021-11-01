import {
  React,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef,
} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import SkillScreen from "./SkillScreen";
import ProjectScreen from "./ProjectScreen";
import ContactScreen from "./ContactScreen";
import Navigation from "../component/Navigation";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [urlSesstionImg, setUrlSesstionImg] = useState();

  const modalNav = useRef();
  const modalNavBody = useRef();
  const modalNavOverlay = useRef();

  const handleToggleNav = () => {
    const modal = modalNav.current;
    const body = modalNavBody.current;
    const overlay = modalNavOverlay.current;

    const isModalDisplay = modal.style.display;
    console.log(isModalDisplay);
    if (isModalDisplay === "none" || isModalDisplay === "") {
      modal.style.display = "block";

      setTimeout(() => {
        body.style.left = 0;
        overlay.style.animation = "fideIn 1s";
      }, 0);
    } else {
      body.style.left = "-100%";
      overlay.style.animation = "fideOut 1s";

      setTimeout(() => {
        modal.style.display = "none";
      }, 1000);
    }
  };
  useEffect(() => {
    const overlay = modalNavOverlay.current;
    overlay.addEventListener("click", handleToggleNav);

    const navList = document.querySelectorAll(".nav__item");
    navList.forEach((navItem) => {
      navItem.addEventListener("click", handleToggleNav);
    });
    return () => {
      navList.forEach((navItem) => {
        navItem.removeEventListener("click", handleToggleNav);
      });
    };
  }, []);

  // handle
  const handleToggle = useCallback(() => {
    const html = document.querySelector("html");
    if (!isDarkMode) {
      setIsDarkMode(true);
      html.classList.add("dark-mode");

      localStorage.setItem("isDarkMode", true);
    } else {
      setIsDarkMode(false);
      html.classList.remove("dark-mode");

      localStorage.removeItem("isDarkMode");
    }
  }, [isDarkMode]);

  // useEffect
  useEffect(() => {
    const html = document.querySelector("html");

    const IsDarkMode = localStorage.getItem("isDarkMode");
    if (IsDarkMode) {
      setIsDarkMode(true);
      html.classList.add("dark-mode");
    } else {
      setIsDarkMode(false);
      html.classList.remove("dark-mode");
    }
  }, []);
  useLayoutEffect(() => {
    if (isDarkMode) {
      setUrlSesstionImg("/images/moon.png");
    } else {
      setUrlSesstionImg("/images/sun.png");
    }
  }, [isDarkMode]);
  return (
    <Router>
      <div className="grid wide">
        <Navigation
          handleToggle={handleToggle}
          handleToggleNav={handleToggleNav}
        />
        <Switch>
          <Route path="/skill">
            <SkillScreen />
          </Route>
          <Route path="/project">
            <ProjectScreen />
          </Route>
          <Route path="/contact">
            <ContactScreen />
          </Route>
          <Route path="/">
            <HomeScreen urlSesstionImg={urlSesstionImg} />
          </Route>
        </Switch>

        <div className="modal modal-nav" ref={modalNav}>
          <div className="modal__overlay" ref={modalNavOverlay}></div>
          <div className="modal__body" ref={modalNavBody}>
            <div className="modal__inner">
              <ul className="nav__list-mobile">
                <li className="nav__item">
                  <Link to="/" className="nav__link">
                    Giới thiệu
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/skill" className="nav__link">
                    Kỹ năng
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/project" className="nav__link">
                    Dự án
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/contact" className="nav__link">
                    Liên hệ
                  </Link>
                </li>
              </ul>
              <div
                className="nav-bars hiddenOnPc hiddenOnTablet"
                style={{ margin: "20px" }}
                onClick={handleToggleNav}
              >
                <i
                  className="nav-bars-icon fas fa-window-close"
                  style={{ fontSize: "3rem" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
