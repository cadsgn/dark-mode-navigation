export interface IColors {
  white: string;
  black: string;
  gray: {
    100: string;
  };
}

export const colors: IColors = {
  white: "#ffffff",
  black: "#000000",
  gray: { 100: "#000000" },
};

export const darkColors: IColors = {
  white: "#000000",
  black: "#ffffff",
  gray: { 100: "#000000" },
};
