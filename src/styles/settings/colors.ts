export interface IColors {
  primary: {
    900: string;
    500: string;
    100: string;
  };
  secondary: {
    900: string;
    500: string;
    100: string;
  };
  neutral: {
    900: string;
    700: string;
    500: string;
    300: string;
    100: string;
  };
}

export const colors: IColors = {
  primary: {
    900: "#005B4E",
    500: "#00AA9C",
    100: "#E0FFF9",
  },
  secondary: {
    900: "#806642",
    500: "#D2B48C",
    100: "#FFF7E8",
  },
  neutral: {
    900: "#000000",
    700: "#444444",
    500: "#666666",
    300: "#BFBFBF",
    100: "#FFFFFF",
  },
};

export const darkColors: IColors = {
  primary: {
    900: "#E0FFF9",
    500: "#00AA9C",
    100: "#005B4E",
  },
  secondary: {
    900: "#FFF7E8",
    500: "#D2B48C",
    100: "#806642",
  },
  neutral: {
    900: "#FFFFFF",
    700: "#BFBFBF",
    500: "#FFFFFF",
    300: "#444444",
    100: "#000000",
  },
};
