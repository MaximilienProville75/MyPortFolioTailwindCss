import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full mt-1 sm:text-sm">
      {theme === "dark" ? (
        <FaSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-400 dark:text-purple-500 text-2xl cursor-pointer sm:text-sm"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-400 dark:text-purple-500 text-2xl cursor-pointer sm:text-sm"
        />
      )}
    </div>
  );
};

export default Toggle;
