export default function Tab3({ setFormData, formData }) {
  // Ensure hobbies is always an array
  const { hobbies } = formData;
  function handleFormData(e) {
    let value = e.target.key;

    setFormData((prev) => {
      const updatedHobbies = e.target.checked
        ? [...prev.hobbies, value]
        : prev.hobbies.filter((v) => {
            return v != v;
          });

      return { ...prev, hobbies: [...updatedHobbies] };
    });
  }

  return (
    <div className="flex flex-col gap-2">
      <label>Hobbies:</label>
      <label>
        <input
          type="checkbox"
          value="cricket"
          onChange={handleFormData}
          name="cricket"
          checked={hobbies.includes("cricket")}
        />
        Cricket
      </label>
      <label>
        <input
          type="checkbox"
          value="Reading"
          name="Reading"
          onChange={handleFormData}
          checked={hobbies.includes("Reading")}
        />
        Reading
      </label>
      <label>
        <input
          type="checkbox"
          value="TV"
          name="TV"
          onChange={handleFormData}
          checked={hobbies.includes("TV")}
        />
        TV
      </label>
    </div>
  );
}
