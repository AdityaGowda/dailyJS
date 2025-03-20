export default function Tab1({ setFormData }) {
  function handleFormData(e) {
    let key = e.target.name;
    let value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
    // [key]: value  Correct way to dynamically set key
  }
  return (
    <div className="flex flex-col gap10">
      <label>
        FirstName:
        <input
          className=""
          type="text"
          name="firstName"
          onChange={(e) => handleFormData(e)}
        />
      </label>
      <label>
        LastName :{" "}
        <input
          className=""
          type="text"
          name="lastName"
          onChange={(e) => handleFormData(e)}
        />
      </label>
      <label>
        Age :
        <input type="number" name="age" onChange={(e) => handleFormData(e)} />
      </label>
    </div>
  );
}
