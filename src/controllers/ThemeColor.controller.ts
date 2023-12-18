type ThemeProps =
  | "bgColor"
  | "textColor"
  | "navigationBorderColor"
  | "subTextColor"
  | "popupBgColor"
  | "popupTextColor"
  | "primaryButtonBgColor"
  | "secondaryButtonBgColor" | "initiationTextColor" | "primaryButtonTextColor" | "secondaryButtonTextColor";

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
      textColor: "text-[#ffffff]",
      primaryButtonTextColor: "text-[#000000]",
      secondaryButtonTextColor: "text-[#ffffff]",
      subTextColor: "text-[#A4A4A4]",
      primaryButtonBgColor: "bg-white",
      secondaryButtonBgColor: "bg-[#0d0d0d]",
      initiationTextColor: "text-orange-400",
      navigationBorderColor: "border-b-[#ACACAC]",
      popupBgColor: "bg-gray-800",
      popupTextColor: "text-[#ffffff]",
    },
    light: {
      bgColor: "bg-[#ffffff]",
      textColor: "text-gray-700",
      subTextColor: "text-[#828282]",
      primaryButtonTextColor: "text-[#ffffff]",
      secondaryButtonTextColor: "text-[#000000]",
      primaryButtonBgColor: "bg-[#0d0d0d]",
      initiationTextColor: "text-orange-400",
      secondaryButtonBgColor: "bg-white",
      navigationBorderColor: "border-b-[#919191]",
      popupBgColor: "bg-white",
      popupTextColor: "text-gray-700",
    },
  };

  public get getThemeColor() {
    return this.THEME[this.theme];
  }
}
