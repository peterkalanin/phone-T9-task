import React from "react";
import { useState, useEffect } from "react";
import PhoneKeyButton from "./PhoneKeyButton";
import PhoneControlButton from "./PhoneControlButton";
import PhoneScreen from "./PhoneScreen";
import WordsService from "../services/words.service";

export default function Phone() {
  const [numberKeys, setNumberKeys] = useState([]);
  const [words, setWords] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    WordsService.getWords({ keys: numberKeys }).then((res) => {
      setWords(res);
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
  const onLeftControlButtonClick = () => {};

  /**
   * Function triggers on right control button.
   * TODO: missing functionality
   */
  const onRightControlButtonClick = () => {
    setNumberKeys([]);
  };

  const addWordToText = (word) => {
    setText(text + `${word} `);
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
            wordSelect={addWordToText}
          />
        </div>
        <div className="phone-keyboard">
          <PhoneControlButton click={onLeftControlButtonClick} />
          <div></div>
          <PhoneControlButton click={onRightControlButtonClick} />
          {buttons.map((button, index) => (
            <PhoneKeyButton button={button} key={index} click={onButtonClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
