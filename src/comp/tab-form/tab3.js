import { useState, useEffect } from "react";

export default function Tab3({ setFormData, hobbies }) {
  function handleFormData(e, i) {
    setFormData((prev) => {
      let updatedHobbies = { ...prev };
      updatedHobbies.hobbies[i].ischecked =
        !updatedHobbies.hobbies[i].ischecked;
      return updatedHobbies;
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <label>Hobbies:</label>
      {hobbies.length > 0 &&
        hobbies.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                value={v.name}
                onChange={(e) => handleFormData(e, i)}
                name={v.name}
                checked={v.ischecked}
              />
              {v.name}
            </label>
          );
        })}
    </div>
  );
}
