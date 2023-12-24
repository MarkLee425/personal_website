import { TThemeProps } from "../../../controllers/ThemeColor.controller";

type TCategoriesButtonProps = {
  name: string;
  icon: JSX.Element;
  style: TThemeProps;
};

const CategoriesButton = ({ name, icon, style }: TCategoriesButtonProps) => {
  return (
    <div className="">
      <div
        className={`flex align-middle p-1.5 text-center ${style.blockBorderColor} ${style.textColor} hover:animate-customPulse hover:text-orange-500 hover:border-orange-500 rounded-lg border-1`}
      >
        {icon}
        <p className="ml-1">{name}</p>
      </div>
    </div>
  );
};

export default CategoriesButton;
