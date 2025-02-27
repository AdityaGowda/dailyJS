import { useState } from "react";

export default function NoteApp() {
  const [textInput, setTextInput] = useState();
  const [storeNote, setStoreNote] = useState([]);
  function addToNote() {
    setStoreNote((pre) => {
      return [textInput, ...pre];
    });
    setTextInput("");
  }

  return (
    <div className="center-div flex flex-col p-30 justify-start">
      <div className="flex justify-center">
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="mr-5"
          placeholder="Enter text here..."
        />
        <button type="submit" onClick={() => addToNote()} className="button-2">
          Add
        </button>
      </div>
      <div className="width100">
        <ul className="">
          {storeNote.length > 0 &&
            storeNote.map((v, i) => {
              return (
                <div className="flex  align-center justify-spacebetween">
                  <li>{v}</li>
                  <div className="button-2">R</div>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
