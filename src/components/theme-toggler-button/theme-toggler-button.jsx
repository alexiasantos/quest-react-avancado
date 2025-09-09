import { ThemeContext, themes } from "../../contexts/theme-context";
import React, { useContext } from "react";
import {Button} from '../button/button'

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <Button  onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} >Toggle Theme</Button>
    );
};
