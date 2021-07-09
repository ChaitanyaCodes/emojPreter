import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "👌": "OK Hand",
  "✌️": "Victory Hand",
  "🤞": "Crossed Fingers",
  "🤙": "Call Me Hand",
  "🙏": "Folded Hands",
  "✊": "Raised Fist"
};

var messages = {
  inputPlaceholder: "Enter a emoji here",
  notFound:
    "Sorry! the emoji you are searching for is not present in the Database"
};

var emojiKeys = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (!(meaning in emojiDictionary)) {
      meaning = messages.notFound;
    }
    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setSearchQuery(emoji);
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="title">Emoj Pretor</h1>
      <input
        onChange={emojiInputHandler}
        placeholder={messages.inputPlaceholder}
      ></input>
      <div className="display">
        {meaning === messages.notFound || meaning === ""
          ? meaning
          : `${searchQuery} = ${meaning}`}
      </div>
      <div>
        <ul className="list-non-bullet">
          {emojiKeys.map((emoji) => {
            return (
              <li key={emoji} onClick={() => emojiClickHandler(emoji)}>
                {emoji}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
