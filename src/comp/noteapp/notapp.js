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
    <div className="center-div flex flex-col  justify-start">
      <h1 className="mb-20">Note App</h1>
      <div className="flex justify-center width93">
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
          className="width100 pr-10 mt-10"
          style={{ maxHeight: "110px", overflowY: "scroll" }}
        >
          <ul className="">
            {storeNote.map((v, i) => {
              return (
                <div className="flex  align-center justify-spacebetween m-10">
                  <li>{v}</li>
                  <div
                    className="button-2"
                    onClick={() => {
                      deleteNote(i);
                    }}
                  >
                    <AiOutlineDelete />
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

function AiOutlineDelete(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
    </svg>
  );
}
