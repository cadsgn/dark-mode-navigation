import * as React from "react";
import isBrowser from "../../utils/isBrowser";

export const useSelectedTheme = () => {
  if (isBrowser) {
    const [theme, setTheme] = React.useState(
      window.localStorage.getItem("theme")
        ? window.localStorage.getItem("theme")
        : "light"
    );

    console.log(theme);

    const setThemeType = (type) => {
      window.localStorage.setItem("theme", type);
      setTheme(type);
    };

    const toggleTheme = () => {
      theme === "dark" ? setThemeType("light") : setThemeType("dark");
    };

    React.useEffect(() => {
      const localTheme = window.localStorage.getItem("theme");
      localTheme ? setTheme(localTheme) : setThemeType("dark");
    }, []);

    return [theme, toggleTheme];
  } else {
    return ["light", null];
  }
};
