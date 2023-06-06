import React from 'react';

export default function NamePlaylist() {

    const [name, setName] = React.useState("")

    function handleChange(event) {
        setName(event.target.value)
        console.log(name)
    }

    return (
        <input 
        onChange={handleChange}
        type="text"
        placeholder="Playlist Name"
        name="name"
        value={name}
        ></input>
    )
}