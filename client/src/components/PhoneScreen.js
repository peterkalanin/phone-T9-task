import React from "react";

export default function PhoneScreen(props) {
  const leftActionLabel = "Select";
  const rightActionLabel = "Clean";

  const text = props.text;
  const words = props.words;
  const numberKeys = props.numberKeys;

  return (
    <div className="phone-screen">
      <div className="phone-text">{text} {numberKeys}</div>
      <div className="phone-lines">
        {words.map((word, index) => {
          return (
            <div className="phone-line" key={index} onClick={() => props.wordSelect(word)}>
              {word}
            </div>
          );
        })}
      </div>
      <div className="phone-actions">
        <div className="phone-action">{leftActionLabel}</div>
        <div className="phone-action">{rightActionLabel}</div>
      </div>
    </div>
  );
}
