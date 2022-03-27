import React from "react";

// const getInitialTheme = () => {
//   if (typeof window !== "undefined" && window.localStorage) {
//     const storedPrefs = window.localStorage.getItem("color-theme");
//     if (typeof storedPrefs === "string") {
//       return storedPrefs;
//     }

//     const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
//     if (userMedia.matches) {
//       return "dark";
//     }
//   }

//   return "light";
// };

export const LangContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [lang, setLang] = React.useState("");

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
