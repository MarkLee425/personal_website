type ButtonBgProps = {
  primary: string;
  hover: string;
};

type OrangeProps = ButtonBgProps;

type ButtonsBgProps = {
  primary: ButtonBgProps;
  secondary: ButtonBgProps;
  tertiary: ButtonBgProps;
  floatbar: string;
};

type ButtonsTextProps = {
  primary: string;
  secondary: string;
};

type BlockBorderProps = ButtonsTextProps;

type DotProps = {
  primary: string;
  secondary: string;
};

type BgProps = {
  primary: string;
  left: string;
  dot: DotProps;
  floatbar: string;
  navbar: string;
  popup: string;
  buttons: ButtonsBgProps;
};

type TextProps = {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  orange: OrangeProps;
  navbar: string;
  popup: string;
  floatbar: string;
  buttons: ButtonsTextProps;
};

type BorderProps = {
  navigation: string;
  floatbar: string;
  timeline: string;
  block: BlockBorderProps;
};

export type ThemeProps = {
  bgColor: BgProps;
  textColor: TextProps;
  borderColor: BorderProps;
};

type ThemesProps = {
  dark: ThemeProps;
  light: ThemeProps;
};

export class ThemeColorController {
  readonly theme: TTheme;

  constructor(theme: TTheme) {
    this.theme = theme;
  }

  private readonly THEME: ThemesProps = {
    dark: {
      bgColor: {
        primary: "bg-[#161616]",
        left: "bg-[#121212]",
        buttons: {
          primary: { primary: "bg-white", hover: "hover:bg-gray-200" },
          secondary: { primary: "bg-[#0d0d0d]", hover: "hover:bg-gray-800" },
          tertiary: { primary: "bg-purple-800", hover: "hover:bg-purple-500" },
          floatbar: "bg-white",
        },
        dot: { primary: "bg-orange-400", secondary: "bg-gray-700" },
        floatbar: "bg-[#1E1E1E]",
        navbar: "bg-[#191919]",
        popup: "bg-[#3A3A3B]",
      },
      textColor: {
        primary: "text-[#ffffff]",
        secondary: "text-gray-500",
        tertiary: "text-[#D1D0D0]",
        quaternary: "text-[#A4A4A4]",
        orange: { primary: "text-orange-400", hover: "hover:text-orange-400" },
        navbar: "text-gray-300",
        popup: "text-[#ffffff]",
        floatbar: "text-white",
        buttons: {
          primary: "text-[#000000]",
          secondary: "text-[#ffffff]",
        },
      },
      borderColor: {
        navigation: "border-b-[#ACACAC]",
        floatbar: "border-white",
        timeline: "border-gray-300",
        block: { primary: "border-gray-500", secondary: "border-gray-800" },
      },
    },
    light: {
      bgColor: {
        primary: "bg-[#ffffff]",
        left: "bg-[#F7F2F2]",
        buttons: {
          primary: { primary: "bg-[#0d0d0d]", hover: "hover:bg-gray-700" },
          secondary: { primary: "bg-white", hover: "hover:bg-gray-100" },
          tertiary: { primary: "bg-purple-500", hover: "hover:bg-purple-400" },
          floatbar: "bg-gray-300",
        },
        dot: { primary: "bg-orange-400", secondary: "bg-gray-200" },
        floatbar: "bg-white",
        navbar: "bg-white",
        popup: "bg-white",
      },
      textColor: {
        primary: "text-gray-700",
        secondary: "text-gray-400",
        tertiary: "text-[#868686]",
        quaternary: "text-[#828282]",
        orange: { primary: "text-orange-400", hover: "hover:text-orange-400" },
        navbar: "text-gray-500",
        popup: "text-gray-700",
        floatbar: "text-black",
        buttons: {
          primary: "text-[#ffffff]",
          secondary: "text-[#000000]",
        },
      },
      borderColor: {
        navigation: "border-b-[#919191]",
        floatbar: "border-[#C0BFBF]",
        timeline: "border-gray-800",
        block: { primary: "border-gray-300", secondary: "border-gray-100" },
      },
    },
  };

  public get getThemeColor() {
    return this.THEME[this.theme];
  }
}
