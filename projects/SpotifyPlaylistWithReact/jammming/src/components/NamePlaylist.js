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

