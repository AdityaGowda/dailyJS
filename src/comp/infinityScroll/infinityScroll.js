import { useEffect, useState } from "react";

export default function InfinityScroll() {
  const [getCardDetails, setCardDetails] = useState([]);
  const [page, setPage] = useState(1);
  function getRestCountries(page = 1) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        setCardDetails((pre) => {
          return [...response.data, ...pr];
        });
      });
  }
  function handleScroll() {
    console.log("pppp");
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    )
      setPage((pre) => pre + 1);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="m-10">
      <div className="card">
        <h>iiiii</h>
        <img src="#" alt="#" />{" "}
      </div>
    </div>
  );
}
