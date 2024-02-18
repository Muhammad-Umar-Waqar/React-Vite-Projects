import { createContext, useContext } from "react";
export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: ()=>{},
    lightTheme : ()=>{},
})

export const ThemeProvider = ThemeContext.Provider
// It is a hook

export default function useTheme(){
    return useContext(ThemeContext)
}