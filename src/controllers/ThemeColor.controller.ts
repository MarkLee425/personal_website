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
  | "descriptionTextColor"
  | "floatBarBackgroundColor"
  | "floatBarBorderColor"
  | "floatBarButtonColor"
  | "floatBarTextColor"
  | "timelineColor"
  | "blockBorderColor"
  | "secondaryTextColor"
  | "hoverTextColor"
  | "blockSecondaryBorderColor" | "dotPrimaryBackgroundColor" | "dotSecondaryBackgroundColor";

export type TThemeProps = Record<ThemeProps, string>;

type TThemeConfiguration = {
  [key in TTheme]: TThemeProps;
};

export class ThemeColorController {
  readonly theme: TTheme;

  constructor(theme: TTheme) {
    this.theme = theme;
  }

  private readonly THEME: TThemeConfiguration = {
    dark: {
      bgColor: "bg-[#161616]",
      leftBgColor: "bg-[#121212]",
      textColor: "text-[#ffffff]",
      secondaryTextColor: "text-gray-500",
      descriptionTextColor: "text-[#D1D0D0]",
      primaryButtonTextColor: "text-[#000000]",
      secondaryButtonTextColor: "text-[#ffffff]",
      subTextColor: "text-[#A4A4A4]",
      primaryButtonBgColor: "bg-white",
      secondaryButtonBgColor: "bg-[#0d0d0d]",
      hoverPrimaryButtonBgColor: "hover:bg-gray-200",
      hoverSecondaryButtonBgColor: "hover:bg-gray-800",
      initiationTextColor: "text-orange-400",
      hoverTextColor: "text-orange-400",
      navigationBorderColor: "border-b-[#ACACAC]",
      navbarTextColor: "text-gray-300",
      navbarBgColor: "bg-[#191919]",
      popupBgColor: "bg-[#3A3A3B]",
      popupTextColor: "text-[#ffffff]",
      floatBarBackgroundColor: "bg-[#1E1E1E]",
      floatBarBorderColor: "border-white",
      floatBarButtonColor: "bg-white",
      floatBarTextColor: "text-white",
      timelineColor: "border-gray-300",
      blockBorderColor: "border-gray-500",
      blockSecondaryBorderColor: "border-gray-800",
      dotPrimaryBackgroundColor: "bg-orange-400",
      dotSecondaryBackgroundColor: "bg-gray-700",
    },
    light: {
      bgColor: "bg-[#ffffff]",
      leftBgColor: "bg-[#F7F2F2]",
      textColor: "text-gray-700",
      secondaryTextColor: "text-gray-400",
      descriptionTextColor: "text-[#868686]",
      subTextColor: "text-[#828282]",
      primaryButtonTextColor: "text-[#ffffff]",
      secondaryButtonTextColor: "text-[#000000]",
      primaryButtonBgColor: "bg-[#0d0d0d]",
      secondaryButtonBgColor: "bg-white",
      hoverTextColor: "text-orange-400",
      hoverPrimaryButtonBgColor: "hover:bg-gray-700",
      hoverSecondaryButtonBgColor: "hover:bg-gray-100",
      initiationTextColor: "text-orange-400",
      navigationBorderColor: "border-b-[#919191]",
      navbarTextColor: "text-gray-500",
      navbarBgColor: "bg-white",
      popupBgColor: "bg-white",
      popupTextColor: "text-gray-700",
      floatBarBackgroundColor: "bg-white",
      floatBarBorderColor: "border-[#C0BFBF]",
      floatBarButtonColor: "bg-gray-300",
      floatBarTextColor: "text-black",
      timelineColor: "border-gray-800",
      blockBorderColor: "border-gray-300",
      blockSecondaryBorderColor: "border-gray-100",
      dotPrimaryBackgroundColor: "bg-orange-400",
      dotSecondaryBackgroundColor: "bg-gray-200",
    },
  };

  public get getThemeColor() {
    return this.THEME[this.theme];
  }
}
