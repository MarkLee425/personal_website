import React from "react";
import { DEFAULT_ICON_SIZE, ThreeDots } from "../react-icons";

type TThreeDotsButton = {
  clickHandler: React.MouseEventHandler<HTMLDivElement>;
};

const ThreeDotsButton = ({ clickHandler }: TThreeDotsButton) => {
  return (
    <div>
      <ThreeDots
        size={DEFAULT_ICON_SIZE}
        className="hover:cursor-pointer"
        onClick={clickHandler}
      />
    </div>
  );
};

export default ThreeDotsButton;
