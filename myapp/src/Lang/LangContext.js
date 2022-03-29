import React from "react";

export const LangContext = React.createContext({
  lang: "En",
  setLanguage: () => {},
});

export const LangProvider = ({ initialTheme, children }) => {
  const [lang, setLang] = React.useState(LangContext, "En");

  const rawSetTheme = (rawTheme) => {
    const isDark = rawTheme === "En";
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
