import { useEffect, useState } from "react";

export default function InfinityScroll() {
  const [getCardDetails, setCardDetails] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const [page, setPage] = useState(0);
  function getRestCountries(page = 1) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        setSpinner(false);
        setCardDetails((pre) => {
          return [...response, ...pre];
        });
      });
  }
  function handleScroll() {
    //window.innerHeight -> The height of the visible part of the page (viewport).
    // window.scrollY -> The number of pixels the page has been scrolled down.
    //document.body.scrollHeight  -> The total height of the document, including both the visible and scrollable parts.
    // +10 is added due to rounding errors in window.innerHeight + window.scrollY
    // (Alternatively, we can use Math.round() to minimize precision issues)
    if (window.innerHeight + window.scrollY + 1 >= document.body.scrollHeight) {
      setSpinner(true);
      setPage((pre) => (pre + 1) % 10);
    }
  }

  // scroll event mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //page update
  useEffect(() => {
    getRestCountries(page);
  }, [page]);

  return (
    <div className="flex flex-col align-center  ">
      <h1>&infin; Scroll</h1>
      <div className="m-10 flex wrap justify-center ">
        {getCardDetails.map((v, i) => {
          return (
            <div className="card  p-20 m-10">
              <h>{v.title}</h>
              <p>{v.body}</p>
            </div>
          );
        })}
      </div>
      {spinner && <ImSpinner9 />}
    </div>
  );
}

function ImSpinner9(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M8 0c-4.355 0-7.898 3.481-7.998 7.812 0.092-3.779 2.966-6.812 6.498-6.812 3.59 0 6.5 3.134 6.5 7 0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-4.418-3.582-8-8-8zM8 16c4.355 0 7.898-3.481 7.998-7.812-0.092 3.779-2.966 6.812-6.498 6.812-3.59 0-6.5-3.134-6.5-7 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 4.418 3.582 8 8 8z" />
    </svg>
  );
}
