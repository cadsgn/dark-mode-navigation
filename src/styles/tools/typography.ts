export interface IOpensans {
  head: {
    regular: {
      small: string;
      medium: string;
      big: string;
    };
    bold: {
      small: string;
      medium: string;
      big: string;
    };
  };
  body: {
    regular: string;
    bold: string;
  };
  caption: {
    regular: string;
    bold: string;
  };
}

export const head: IOpensans["head"] = {
  regular: {
    small: "font-size: 1.4rem; line-height: normal; font-weight: 400;",
    medium: "font-size: 1.6rem; line-height: normal; font-weight: 400;",
    big: "font-size: 2rem; line-height: normal; font-weight: 400;",
  },
  bold: {
    small: "font-size: 1.4rem; line-height: normal; font-weight: 600;",
    medium: "font-size: 1.6rem; line-height: normal; font-weight: 600;",
    big: "font-size: 2rem; line-height: normal; font-weight: 600;",
  },
};

export const body: IOpensans["body"] = {
  regular:
    "font-size: 1.3rem; line-height: normal; letter-spacing: 0.03rem; font-weight: 400;",
  bold: "font-size: 1.3rem; line-height: normal; letter-spacing: 0.03rem; font-weight: 600;",
};

export const caption: IOpensans["caption"] = {
  regular:
    "font-size: 1.2rem; line-height: normal; letter-spacing: 0.03rem; font-weight: 400;",
  bold: "font-size: 1.2rem; line-height: normal; letter-spacing: 0.03rem; font-weight: 600;",
};
