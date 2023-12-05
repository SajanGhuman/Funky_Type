"use client";
import React, { useState } from "react";

const Type = () => {
  const [type, setType] = useState("");

  const handleTypeChange = (e) => {
    setType(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <textarea
        className="bg-monkey-gray pt-0 pl-5 text-[30px] text-bold leading-9 resize-none
         text-monkey-text outline-0 outline-none shadow-none -moz-select-none -webkit-select-none -ms-select-none no-underline"
        onChange={(e) => handleTypeChange(e)}
        value={type}
        cols={60}
        rows={3}
        maxlength={200}
        spellCheck={false}
      ></textarea>
    </div>
  );
};

export default Type;
