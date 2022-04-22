interface Theme {
  colors: {
    primary: string;
    secondary: string;
    text: string;
    secondary_text: string;
    categories: string[];
  };
}

export const defaultTheme: Theme = {
  colors: {
    primary: "#000003",
    secondary: "",
    text: "#fffffc",
    secondary_text: "#000003",
    categories: [
      "#ff7070",
      "#ffbf70",
      "#fdff85",
      "#99ff85",
      "#5cf1ff",
      "#70a7ff",
      "#9785ff",
    ],
  },
};

export const fonts = {
  Apercu: {
    light: "Apercu-Light",
    regular: "Apercu-Regular",
    medium: "Apercu-Medium",
    bold: "Apercu-Bold",
  },
};
