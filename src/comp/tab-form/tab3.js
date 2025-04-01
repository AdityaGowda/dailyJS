import { useState } from "react";

export default function Tab3({ setFormData, formData }) {
  function handleFormData(i) {
    setFormData((prev) => {
      // Create a copy of the hobbies array
      let updatedHobbies = [...prev.hobbies];
      // Toggle the ischecked property of the selected hobby
      updatedHobbies[i].ischecked = !updatedHobbies[i].ischecked;
      // Return a new object with the updated hobbies array
      console.log("Updated Hobbies:", updatedHobbies);
      return { ...prev, hobbies: updatedHobbies }; // Ensure to spread prev to keep other formData intact
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <label>Hobbies:</label>
      {formData.hobbies.length > 0 &&
        formData.hobbies.map((v, i) => {
          return (
            <label>
              <input
                key={i}
                type="checkbox"
                name={v.name}
                checked={v.ischecked}
                onChange={() => handleFormData(i)} // Move onChange to the input
              />
              {v.name}
            </label>
          );
        })}
    </div>
  );
}
