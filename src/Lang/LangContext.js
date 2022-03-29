import React from "react";

export const LangContext = React.createContext({
  lang: "En",
  setLanguage: () => {},
});

export const LangProvider = ({ initialTheme = "En", children }) => {
  const [lang, setLang] = React.useState("En");

  const rawSetTheme = (rawTheme) => {
    const isEn = rawTheme === "En";
    return isEn;
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
