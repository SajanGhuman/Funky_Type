"use client";
import React, { useEffect, useState, useRef } from "react";

const Type = () => {
  const [type, setType] = useState("");
  const [strCount, setStrCount] = useState(1);
  const [key1, setKey1] = useState({});
  const [key2, setKey2] = useState({});
  const [keyCode1, setKeyCode1] = useState();
  const [keyCode2, setKeyCode2] = useState();
  const [time1, setTime1] = useState(0);
  const [time2, setTime2] = useState(0);
  const [timeDiff, setTimeDiff] = useState(0);
  const [wpm, setWPM] = useState(0);
  const [cpm, setCPM] = useState(0);
  const textRef = useRef();

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement === textRef.current) {
        if (strCount % 2 !== 0) {
          console.log(e);
          console.log("Key1: " + e.key);
          console.log("KeyCode1: " + e.keyCode);
          console.log("Time1: " + e.timeStamp);
          setKey1(e.key);
          setKeyCode1(e.keyCode);
          setTime1(e.timeStamp);
          setStrCount(2);
        } else {
          console.log(e);
          console.log("key2: " + e.key);
          console.log("keyCode2: " + e.keyCode);
          console.log("Time2: " + e.timeStamp);
          setKey2(e.key);
          setKeyCode2(e.keyCode);
          setTime2(e.timeStamp);
          const timeDiff = e.timeStamp - time1;
          setTimeDiff(timeDiff);
          console.log(timeDiff);
          setStrCount(1);
          setCPM(2 / timeDiff);
        }
      }
      return;
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [type]);

  return (
    <div>
      <textarea
        className="bg-monkey-gray pt-0 pl-5 text-[30px] text-bold leading-9 resize-none
         text-monkey-text outline-0 outline-none shadow-none -moz-select-none -webkit-select-none -ms-select-none no-underline"
        onChange={(e) => handleTypeChange(e)}
        value={type}
        cols={60}
        rows={3}
        maxLength={200}
        spellCheck={false}
        ref={textRef}
      ></textarea>
    </div>
  );
};

export default Type;
