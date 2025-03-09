import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home({ componentNames }) {
  const [components] = useState(componentNames);
  return (
    <center className="p-30 ">
      <h1>Daily React & JS Challenges</h1>
      <div className="homeContainer flex flex-col align-center">
        {components.map((v, i) => (
          <Link
            to={`/${v.toLowerCase()}`}
            className="list flex font-lg pointer"
            key={i}
          >
            {v}
          </Link>
        ))}
      </div>
    </center>
  );
}
