"use client";

import Typewriter from "typewriter-effect";

interface ITypeWriter {
  text: string;
}

const TypeWriter = ({ text }: ITypeWriter) => {
  return (
    <div>
      <Typewriter
        onInit={(writer) => {
          writer
            .typeString(text)
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .start();
        }}
      />
    </div>
  );
};

export default TypeWriter;
