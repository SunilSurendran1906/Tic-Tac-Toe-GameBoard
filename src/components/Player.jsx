import React from "react";
import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function HandlEditClick() {
    setIsEditing((editing) => !editing); // => schedules a state update to true
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayeName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit";
  if (isEditing) {
    editablePlayeName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayeName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={HandlEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
