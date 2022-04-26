export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    text: string;
    secondary_text: string;
    special_title: string;
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
  name: "default",
  colors: {
    primary: "#000003",
    secondary: "#fffffc",
    special_title: "#fffffc",
    text: "#fffffc",
    secondary_text: "#000003",
    background: "#fffffc",
    categories: ["#046dc8", "#1184a7", "#15a2a2", "#6fb1a0"],
  },
  fonts: apercu,
};

export const darkTheme: Theme = {
  name: "dark",
  colors: {
    primary: "#fffffc",
    secondary: "#000003",
    special_title: "#fffffc",
    text: "#000003",
    secondary_text: "#fffffc",
    background: "#222222",
    categories: [
      "#370617",
      "#6a040f",
      "#9d0208",
      "#d00000",
      "#dc2f02",
      "#e85d04",
    ],
  },
  fonts: apercu,
};
