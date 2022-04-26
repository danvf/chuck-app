interface Theme {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    secondary_text: string;
    background: string;
    categories: string[];
  };
  fonts: {
    light: string;
    regular: string;
    medium: string;
    bold: string;
  };
}

export const apercu = {
  light: "Apercu-Light",
  regular: "Apercu-Regular",
  medium: "Apercu-Medium",
  bold: "Apercu-Bold",
};

export const defaultTheme: Theme = {
  colors: {
    primary: "#000003",
    secondary: "#fffffc",
    text: "#fffffc",
    secondary_text: "#000003",
    background: "#fffffc",
    categories: ["#046dc8", "#1184a7", "#15a2a2", "#6fb1a0"],
  },
  fonts: apercu,
};
