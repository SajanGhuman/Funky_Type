"use client";
import React, { useEffect, useState, useRef } from "react";

const Type = () => {
  const [type, setType] = useState("");
  const [key1, setKey1] = useState({});
  const [key2, setKey2] = useState({});
  const [keyCode1, setKeyCode1] = useState();
  const [keyCode2, setKeyCode2] = useState();
  const textRef = useRef();

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement === textRef.current) {
        console.log(e);
        console.log(e.key);
        console.log(e.keyCode);
        console.log(e.timeStamp);
        console.log(e.timeStamp * 100);
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
