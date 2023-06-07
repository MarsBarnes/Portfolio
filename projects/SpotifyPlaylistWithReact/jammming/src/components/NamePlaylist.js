import React from "react";

export default function NamePlaylist() {
  const [name, setName] = React.useState("");

  const inputRef = React.useRef(null);

  function handleChange(event) {
    setName(event.target.value);
    console.log(name);
  }
  function handleClick() {
    console.log("clicked");
    inputRef.current.focus();
  }

  return (
    <div className="NamePlaylist">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Name your playlist here!"
        name="name"
        value={name}
        className="h1"
        ref={inputRef}
      ></input>
      <span className="material-symbols-outlined" onClick={handleClick}>
        {" "}
        edit
      </span>
    </div>
  );
}

//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus TODO: add google icon for edit after input. add event listener for onclick. use "focus" to select the text field of the inpput so user can rename their playlist
//https://fonts.google.com/icons?selected=Material+Symbols+Outlined:edit:FILL@0;wght@400;GRAD@0;opsz@48&icon.query=edit
