"use client";
import React, { useEffect, useState, useRef } from "react";

const Text = () => {
  const [text, setText] = useState("");
  const str =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Vero similiquaperiam possimus sunt soluta suscipit earum nostrum necessitatibus cupiditate doloremque qui harum dolor dicta cumque laborum perspiciatis expedita mollitia iste";
  const textStyles = {
    white:
      "absolute bg-monkey-gray pt-0 pl-5 text-[30px] text-bold leading-9 resize-none text-monkey-text outline-0 outline-none shadow-none -moz-select-none -webkit-select-none -ms-select-none no-underline z-10 opacity-50",
  };
  const alphabets = [
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90,
  ];
  const doNothing = [9, 13, 32];
  const [textClass, setTextClass] = useState("");
  const [charCount, setCharCount] = useState(0);
  const textRef = useRef();
  const [display, setDisplay] = useState(str.split(" "));

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (doNothing.includes(e.keyCode)) e.preventDefault();
      console.log(e.keyCode);
      if (
        document.activeElement === textRef.current &&
        alphabets.includes(e.keyCode)
      ) {
        if (display.charAt(charCount) === e.key) {
          console.log("entered");
          setCharCount(charCount++);
        }
      }
      return;
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [text]);

  return (
    <>
      <textarea
        className={`absolute bg-monkey-gray pt-0 pl-5 text-[30px] text-bold leading-9 resize-none
         text-monkey-text outline-0 outline-none shadow-none -moz-select-none -webkit-select-none 
         -ms-select-none no-underline z-10 opacity-50`}
        onChange={(e) => handleTextChange(e)}
        value={text}
        cols={60}
        rows={4}
        maxLength={200}
        spellCheck={false}
        ref={textRef}
      ></textarea>
      <div
        className={`absoulte flex justify-center items-center w-[1100px] h-[144px] bg-monkey-gray pt-0 pl-5 
      text-[22px] text-bold leading-9 resize-none text-monkey-text outline-0 outline-none shadow-none
       -moz-select-none -webkit-select-none -ms-select-none no-underline overflow-hidden tracking-wider`}
      >
        {display.map((char) => {
          return `${char} `;
        })}
      </div>
    </>
  );
};

// const min = (timeDiff / 1000) * 60;
// console.log(e);
// console.log("Time Diff: " + timeDiff);
// console.log("Time Diff Secs: " + timeDiff / 1000);
// console.log("Time Diff Mins: " + timeDiff / 1000 / 60);
// console.log("key2: " + e.key);
// console.log("keyCode2: " + e.keyCode);
// console.log("Time2: " + e.timeStamp);
// console.log("Key1: " + e.key);
// console.log("KeyCode1: " + e.keyCode);
// console.log("Time1: " + e.timeStamp);
// setStrCount(1);
// let start = e.timeStamp;
// start = 0;
// setTotalTime(start);
// console.log(e);

export default Text;
