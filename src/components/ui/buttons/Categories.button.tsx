import { ThemeProps } from "../../../controllers/ThemeColor.controller";

type TCategoriesButtonProps = {
  name: string;
  icon: JSX.Element;
  style: ThemeProps;
};

const CategoriesButton = ({ name, icon, style }: TCategoriesButtonProps) => {
  return (
    <div className="">
      <div
        className={`flex align-middle p-1.5 text-center ${style.borderColor.block.primary} ${style.textColor.primary} hover:animate-customPulse ${style.textColor.orange.hover} hover:border-orange-500 rounded-lg border-1`}
      >
        {icon}
        <p className="ml-1">{name}</p>
      </div>
    </div>
  );
};

export default CategoriesButton;
