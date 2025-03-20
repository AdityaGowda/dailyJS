import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Accordion from "./comp/accordion/accordion";
import Carousel from "./comp/carousel/carousel";
import CountDownTimer from "./comp/countdownTimer/countdownTimer";
import DigitalClock from "./comp/digitalClock/digitalClock";
import InfinityScroll from "./comp/infinityScroll/infinityScroll";
import NoteApp from "./comp/noteapp/notapp";
import ProgressBar from "./comp/Progressbar/progressbar";
import StarRating from "./comp/ratingSystem/ratingSystem";
import SearchBar from "./comp/searchbar/searchbar";
import StopWatch from "./comp/stopwatch/stopwatch";
import Home from "./comp/home/home";
import Pagination from "./comp/Pagination/pagination";
import TabForm from "./comp/tab-form/tab-form";

// Store all components in an object
const components = {
  Accordion,
  CountDownTimer,
  DigitalClock,
  InfinityScroll,
  NoteApp,
  ProgressBar,
  StarRating,
  SearchBar,
  StopWatch,
  Pagination,
  TabForm,
};

function App() {
  const [importNames] = useState(Object.keys(components));

  return (
    <>
      <Router basename="/dailyJS">
        <Routes>
          <Route path="/" element={<Home componentNames={importNames} />} />
          {importNames.map((name, i) => {
            const Component = components[name];
            return (
              <Route
                key={i}
                path={`/${name.toLowerCase()}`}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
