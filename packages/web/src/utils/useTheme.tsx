import dark from "@/styles/themes/dark";
import light from "@/styles/themes/light";
import { createContext, ReactNode, useContext } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import usePersistedState from "./usePersistedState";

type ThemeContextData = {
  toggleTheme: () => void;
  theme: DefaultTheme;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme?.title === "light" ? light : dark}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};
