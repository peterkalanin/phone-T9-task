import React from "react";

export default function PhoneScreen(props) {
  const leftActionLabel = "Select";
  const rightActionLabel = "Clean";

  const text = props.text;
  const words = props.words;

  return (
    <div className="phone-screen">
      <div className="phone-text">{text}</div>
      <div className="phone-lines">
        {words.map(word => {return <div className="phone-line">{word}</div>})}
      </div>
      <div className="phone-actions">
        <div className="phone-action">{leftActionLabel}</div>
        <div className="phone-action">{rightActionLabel}</div>
      </div>
    </div>
  );
}
