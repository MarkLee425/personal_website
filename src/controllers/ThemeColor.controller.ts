type ThemeProps =
  | "bgColor"
  | "textColor"
  | "navigationBorderColor"
  | "subTextColor"
  | "popupBgColor"
  | "popupTextColor"
  | "primaryButtonBgColor"
  | "secondaryButtonBgColor"
  | "initiationTextColor"
  | "primaryButtonTextColor"
  | "secondaryButtonTextColor"
  | "hoverPrimaryButtonBgColor"
  | "hoverSecondaryButtonBgColor"
  | "navbarTextColor"
  | "navbarBgColor"
  | "leftBgColor"
  | "descriptionTextColor";

type TThemeConfiguration = {
  [key in TTheme]: Record<ThemeProps, string>;
};

export class ThemeColorController {
  readonly theme: TTheme;

  constructor(theme: TTheme) {
    this.theme = theme;
  }

  private readonly THEME: TThemeConfiguration = {
    dark: {
      bgColor: "bg-[#0d0d0d]",
      leftBgColor: "bg-[#1A1A1A]",
      textColor: "text-[#ffffff]",
      descriptionTextColor: "text-[#D1D0D0]",
      primaryButtonTextColor: "text-[#000000]",
      secondaryButtonTextColor: "text-[#ffffff]",
      subTextColor: "text-[#A4A4A4]",
      primaryButtonBgColor: "bg-white",
      secondaryButtonBgColor: "bg-[#0d0d0d]",
      hoverPrimaryButtonBgColor: "hover:bg-gray-200",
      hoverSecondaryButtonBgColor: "hover:bg-gray-800",
      initiationTextColor: "text-orange-400",
      navigationBorderColor: "border-b-[#ACACAC]",
      navbarTextColor: "text-gray-300",
      navbarBgColor: "bg-gray-900",
      popupBgColor: "bg-gray-800",
      popupTextColor: "text-[#ffffff]",
    },
    light: {
      bgColor: "bg-[#ffffff]",
      leftBgColor: "bg-[#F7F2F2]",
      textColor: "text-gray-700",
      descriptionTextColor: "text-[#868686]",
      subTextColor: "text-[#828282]",
      primaryButtonTextColor: "text-[#ffffff]",
      secondaryButtonTextColor: "text-[#000000]",
      primaryButtonBgColor: "bg-[#0d0d0d]",
      secondaryButtonBgColor: "bg-white",
      hoverPrimaryButtonBgColor: "hover:bg-gray-700",
      hoverSecondaryButtonBgColor: "hover:bg-gray-100",
      initiationTextColor: "text-orange-400",
      navigationBorderColor: "border-b-[#919191]",
      navbarTextColor: "text-gray-500",
      navbarBgColor: "bg-white",
      popupBgColor: "bg-white",
      popupTextColor: "text-gray-700",
    },
  };

  public get getThemeColor() {
    return this.THEME[this.theme];
  }
}
