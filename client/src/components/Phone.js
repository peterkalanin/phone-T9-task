import React from "react";
import { useState, useEffect } from "react";
import PhoneKeyButton from "./PhoneKeyButton";
import PhoneControlButton from "./PhoneControlButton";
import PhoneScreen from "./PhoneScreen";
import WordsService from "../services/words.service";

export default function Phone() {
  const [numberKeys, setNumberKeys] = useState([]);
  const [words, setWords] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [text, setText] = useState([]);
  const [focusIndex, setFocusIndex] = useState(undefined);

  useEffect(() => {
    WordsService.getWords({ keys: numberKeys }).then((res) => {
      setWords(res.words);
      setSuggested(res.suggested);
      setFocusIndex(undefined);
    });
  }, [numberKeys]);

  const buttons = [
    { key: "1", letters: [""] },
    { key: "2", letters: ["a", "b", "c"] },
    { key: "3", letters: ["d", "e", "f"] },
    { key: "4", letters: ["g", "h", "i"] },
    { key: "5", letters: ["j", "k", "l"] },
    { key: "6", letters: ["m", "n", "o"] },
    { key: "7", letters: ["p", "q", "r", "s"] },
    { key: "8", letters: ["t", "u", "v"] },
    { key: "9", letters: ["w", "x", "y", "z"] },
    { key: "*", letters: ["+"] },
    { key: "0", letters: ["⎵"] },
    { key: "#", letters: ["⇧"] },
  ];

  /**
   *
   * @param {*} button
   */
  const onButtonClick = (button) => {
    setNumberKeys([...numberKeys, button.key]);
  };

  /**
   * Function triggers on left control button.
   * TODO: missing functionality
   */
  const onLeftControlButtonClick = () => {
    if (focusIndex !== undefined) {
      addWordToText(suggested[focusIndex]);
    }
  };

  /**
   * Function triggers on right control button.
   * TODO: missing functionality
   */
  const onRightControlButtonClick = () => {
    if (numberKeys.length > 0) {
      setNumberKeys([]);
    } else {
      setText(text.splice(0, text.length - 1));
    }
  };

  /**
   * Sets focusIndex to left if possible
   */
  const onMiddleLeftControlClick = () => {
    if (focusIndex === undefined) {
      setFocusIndex(0);
    } else if (focusIndex > 0) {
      setFocusIndex(focusIndex - 1);
    }
  };

  /**
   * Sets focusIndex to right if possible
   */
  const onMiddleRightControlClick = () => {
    if (focusIndex === undefined) {
      setFocusIndex(0);
    } else if (focusIndex < (suggested.length + words.length) - 1) {
      setFocusIndex(focusIndex + 1);
    }
  };

  /**
   * Add new words into text string
   * @param {string} word 
   */
  const addWordToText = (word) => {
    setText([...text, word]);
    setNumberKeys([]);
  };

  return (
    <div className="phone-wrapper">
      <div className="phone">
        <div className="phone-speaker">
          <div className="phone-speaker-dot"></div>
          <div className="phone-speaker-dot"></div>
          <div className="phone-speaker-dot"></div>
          <div className="phone-speaker-dot"></div>
        </div>
        <div className="phone-screen-wrapper">
          <PhoneScreen
            text={text}
            numberKeys={numberKeys}
            words={words}
            suggested={suggested}
            wordSelect={addWordToText}
            focusIndex={focusIndex}
          />
        </div>
        <div className="phone-keyboard">
          <PhoneControlButton click={onLeftControlButtonClick} />
          <div className="middle-button-wrapper">
            <PhoneControlButton
              noIcon="true"
              click={onMiddleLeftControlClick}
            />
            <PhoneControlButton
              noIcon="true"
              click={onMiddleRightControlClick}
            />
          </div>
          <PhoneControlButton click={onRightControlButtonClick} />
          {buttons.map((button, index) => (
            <PhoneKeyButton button={button} key={index} click={onButtonClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
