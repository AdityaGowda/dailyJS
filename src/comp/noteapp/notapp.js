import { useState } from "react";

export default function NoteApp() {
  const [textInput, setTextInput] = useState();
  const [storeNote, setStoreNote] = useState([]);
  function addToNote() {
    if (textInput.trim() == "") {
      return;
    }
    setStoreNote((pre) => {
      return [...pre, textInput];
    });
    setTextInput("");
  }

  function deleteNote(index) {
    setStoreNote((pre) => {
      return pre.filter((_, i) => {
        return i != index;
      });
    });
  }
  return (
    <div className="center-div flex flex-col p-30 justify-start">
      <p className="mb-20">Note App</p>
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
      {storeNote.length > 0 && (
        <div
          className="width100 pr-10 mt-25"
          style={{ maxHeight: "100px", overflowY: "scroll" }}
        >
          <ul className="">
            {storeNote.map((v, i) => {
              return (
                <div className="flex  align-center justify-spacebetween my-10">
                  <li>{v}</li>
                  <div
                    className="button-2"
                    onClick={() => {
                      deleteNote(i);
                    }}
                  >
                    R
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
