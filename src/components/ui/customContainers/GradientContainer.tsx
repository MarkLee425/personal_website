import { TThemeProps } from "../../../controllers/ThemeColor.controller";

type TGradientContainerProps = {
  style: TThemeProps;
  children: any;
  gridProps: TGridProps
};

type TGridProps = string;

const GradientContainer = ({ style, children, gridProps="" }: TGradientContainerProps) => {
  return (
    <div
      className={`container border rounded-xl p-0.5 hover:border-none hover:animate-borderGradient hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-400 hover:bg-[length:100%_100%] hover:inline-block hover:bg-white ${gridProps}`}
    >
      <div className={`${style.bgColor} rounded-xl p-5`}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default GradientContainer;
