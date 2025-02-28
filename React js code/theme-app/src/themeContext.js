import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevMode) => !prevMode);
    };

    const theme = isDarkTheme ? "dark" : "light";

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
