export default function Tab2({ setFormData }) {
  function handleFormData(e) {
    let key = e.target.name;
    let value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  }
  return (
    <div className="mt-20">
      <label>Gender : </label>
      <label>
        <input
          type="radio"
          value="Male"
          name="gender"
          onChange={(e) => handleFormData(e)}
        />{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) => handleFormData(e)}
        />{" "}
        Female
      </label>
    </div>
  );
}
