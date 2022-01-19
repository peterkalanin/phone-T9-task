import React from "react";

export default function PhoneScreen(props) {
  const leftActionLabel = "Select";
  const middleLeftActionLabel = "<";
  const middleRightActionLabel = ">";
  const rightActionLabel = "Clean";

  const text = props.text;
  const words = props.words || [];
  const suggested = props.suggested || [];
  const numberKeys = props.numberKeys;
  const focusIndex = props.focusIndex;

  /**
   * Checks if suggested word is focused
   * @param {number} index 
   * @returns {boolean}
   */
  const isFocusedSuggested = (index) => {
    return focusIndex === index;
  };

  /**
   * Checks if random word is focused
   * @param {number} index 
   * @returns {boolean}
   */
  const isFocusedWord = (index) => {
    return focusIndex - suggested.length === index;
  };

  return (
    <div className="phone-screen">
      <div className="phone-text">
        {(text || []).join(" ")} {numberKeys}
      </div>
      <div className="phone-lines">
        {suggested.map((word, index) => {
          return (
            <div
              className={`phone-line is-suggested ${
                isFocusedSuggested(index) ? "focused" : ""
              }`}
              key={index}
              onClick={() => props.wordSelect(word)}
            >
              {word}
            </div>
          );
        })}
        {words.map((word, index) => {
          return (
            <div
              className={`phone-line ${isFocusedWord(index) ? "focused" : ""}`}
              key={index}
              onClick={() => props.wordSelect(word)}
            >
              {word}
            </div>
          );
        })}
      </div>
      <div className="phone-actions">
        <div className="phone-action">{leftActionLabel}</div>
        <div className="phone-actions-center">
          <div className="phone-action">{middleLeftActionLabel}</div>
          <div className="phone-action">{middleRightActionLabel}</div>
        </div>
        <div className="phone-action is-right">{rightActionLabel}</div>
      </div>
    </div>
  );
}
