type ThemeProps =
  | "bgColor"
  | "textColor"
  | "navigationBorderColor"
  | "subTextColor";

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
      subTextColor: "text-[#A4A4A4]",
      navigationBorderColor: "border-b-[#ACACAC]",
    },
    light: {
      bgColor: "bg-[#ffffff]",
      textColor: "text-[#000000]",
      subTextColor: "text-[#828282]",
      navigationBorderColor: "border-b-[#919191]",
    },
  };

  public get getThemeColor() {
    return this.THEME[this.theme];
  }
}
