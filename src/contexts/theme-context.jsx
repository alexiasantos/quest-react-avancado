import { createContext, useState } from "react";

export const themes = {
    light:{
        background: "#ffffff",
        color: "#121212",
    },
    dark:{
        background: "#121212",
        color: "#ffffff"
      
    }
}

export const ThemeContext = createContext({});
export const ThemeProvider = (props) =>{

    const [theme, setTheme] = useState(themes.light)
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
