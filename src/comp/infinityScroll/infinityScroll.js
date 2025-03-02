import { useEffect, useState } from "react";

export default function InfinityScroll() {
  const [getCardDetails, setCardDetails] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const [page, setPage] = useState(1);
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
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    )
      setSpinner(true);
    setPage((pre) => pre + 1);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    getRestCountries(page);
  }, [page]);
  return (
    <div className="flex flex-col">
      <div className="m-10 flex wrap justify-center ">
        {getCardDetails.map((v, i) => {
          return (
            <div className="card  p-20 m-10">
              <h>{v.title}</h>
              <p>{v.body}</p>
            </div>
          );
        })}
        {spinner && <ImSpinner9 />}
      </div>
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
