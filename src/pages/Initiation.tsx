import Typewriter from "typewriter-effect";
import { INITIATION } from "../constants";

const Initiation = () => {
  return (
    <>
      <div>
        <Typewriter
          options={{
            delay: 80,
          }}
          onInit={(coder) => {
            coder
              .typeString(INITIATION.welcome)
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(1000)
              .start();
          }}
        />
      </div>
    </>
  );
};

export default Initiation;
