import { useState } from "react";

function Star({ selectedStar = 0, setUpdateStars, starIndex }) {
  // Function to update the selected star rating when clicked
  function handleStarUpdate(index) {
    setUpdateStars((prev) => {
      let prevArray = [...prev]; // Create a copy of the previous state
      prevArray[starIndex] = index + 1; // Update the specific star rating
      return [...prevArray]; // Return a new updated array to trigger re-render
    });
  }

  return (
    <div className="ml-20" style={{ height: "30px" }} key={starIndex}>
      {Array(5)
        .fill() // Create an array of length 5 for stars
        .map((_, i) => {
          return i < selectedStar ? ( // Check if star should be filled or empty
            <span
              key={i} // Unique key for React's reconciliation
              className="font-xl pointer"
              onClick={() => handleStarUpdate(i)} // Handle star click
            >
              &#9733; {/* Filled star */}
            </span>
          ) : (
            <span
              key={i}
              className="font-xl pointer"
              onClick={() => handleStarUpdate(i)}
            >
              &#9734; {/* Empty star */}
            </span>
          );
        })}
    </div>
  );
}

export default function StarRating() {
  // State to track ratings for each person
  const [stars, setUpdateStars] = useState([5, 3, 1, 3]);
  // List of names associated with ratings
  const name = ["Adithya M R", "Manoj S", "Kiran H R", "Ashwath M H"];

  return (
    <div
      className="center-div text-left flex-col width100 align-start overFlowY"
      style={{ height: "200px", justifyContent: "right" }}
    >
      {/* Title */}
      <center className="width100 mt-20">Rating System</center>

      {/* Map through names and corresponding star ratings */}
      {stars.map((v, i) => {
        return (
          <div key={i}>
            <p className="ml-20 mb-10">{name[i]}</p> {/* Display name */}
            <Star
              selectedStar={v} // Pass the selected star rating
              setUpdateStars={setUpdateStars} // Function to update rating
              starIndex={i} // Index of the star being updated
            />
          </div>
        );
      })}
    </div>
  );
}
