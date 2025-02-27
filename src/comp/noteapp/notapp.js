import { useState } from "react";

export default function NoteApp() {
  const [textInput, setTextInput] = useState();
  const [storeNote, setStoreNote] = useState([]);
  function addToNote() {
    setStoreNote((pre) => {
      return [textInput, ...pre];
    });
  }

  return (
    <div className="center-div flex flex-col p-30 justify-start">
      <div className="flex justify-center">
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button type="submit" onClick={() => addToNote()} className="button-2">
          Add
        </button>
      </div>
      <div className="width100">
        <ul className="">
          {storeNote.length > 0 &&
            storeNote.map((v, i) => {
              return <li>{v}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}
