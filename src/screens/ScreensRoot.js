import {
  React,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
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

  // handle
  const handleToggle = useCallback(() => {
    const html = document.querySelector("html");
    if (!isDarkMode) {
      html.classList.add("dark-mode");

      setIsDarkMode(true);

      localStorage.setItem("isDarkMode", true);
    } else {
      html.classList.remove("dark-mode");

      setIsDarkMode(false);

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
        <Navigation handleToggle={handleToggle} />
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
