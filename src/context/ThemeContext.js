import { useEffect, useReducer, createContext, useContext } from "react";
import themeReducer from "./themeReducer";

export const ThemeContext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem("themeSettings")) || {
  primary: "color-5",
  background: "bg-color-1",
};

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState
  );

  const handleTheme = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  //save theme state to local storage
  useEffect(() => {
    localStorage.setItem("themeSettings", JSON.stringify(themeState));
  }, [themeState.primary, themeState.background, themeState]);

  return (
    <ThemeContext.Provider value={{ themeState, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//custom hook to use theme context
export const useThemeContext = () => useContext(ThemeContext);
