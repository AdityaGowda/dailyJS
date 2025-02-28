import { useEffect, useState } from "react";

export default function InfinityScroll() {
  const [getCardDetails, setCardDetails] = useState([]);
  const [page, setPage] = useState(1);
  function getRestCountries(page = 1) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((response) => response.json())
      .then((response) => {});
  }
  function updateContent() {}
  useEffect(() => {
    getRestCountries();
    window.onscroll();
  });
  return (
    <div className="m-10">
      <div className="card">
        <h>iiiii</h>
        <img src="#" alt="#" />{" "}
      </div>
    </div>
  );
}
