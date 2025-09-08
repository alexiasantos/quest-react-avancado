import { ThemeContext, themes } from "../../contexts/theme-context";
import React, { useContext } from "react";
import {Button} from '../button/button'

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (

         <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', position: 'absolute  ', top: '10px', right: '10px'}}>
            <Button  className="theme-toggler" onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} >Toggle Theme</Button>
        </div>
    );
};
