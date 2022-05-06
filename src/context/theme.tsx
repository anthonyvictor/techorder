// import { createContext, FC, ReactNode, useState } from "react";



// interface IThemeContext{
//     theme: Theme,
//     setTheme?: Function
// }
// const ThemeContext = createContext<IThemeContext>({theme: dark})

// type Props = {
//     children: ReactNode
// }

// export const ThemeProvider: FC<Props> = ({children}) => {
    
//     const [currentTheme, setCurrentTheme] = useState<Theme>(dark)

//     return (
//         <ThemeContext.Provider value={{theme: currentTheme, setTheme: setCurrentTheme}}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }