import React from "react";
import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function HandlEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
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
