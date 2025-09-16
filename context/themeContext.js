'use client'
const { createContext,  useState, useEffect } = require("react");


export const ThemeContext = createContext("Dark");


export function ThemeProvider({children}){
    const [ user, SetUser] = useState({name:"piyush", email:"piyush@gmail.com"})
    const [ isDark, setIsDark] = useState(true)

    console.log("is dark ", isDark)

    useEffect( () => {
        const body = document.getElementsByTagName('body')[0]
        console.log("body", body)
        function changeTheme(){
            if(isDark){
               body?.classList?.add("dark")
            }
            if(!isDark){
                body?.classList?.remove("dark")
            }
        }
        changeTheme()
    }, [isDark, setIsDark])




    return(
        <ThemeContext.Provider value={{isDark , setIsDark , user, SetUser}}>
            {children}
        </ThemeContext.Provider>
    )
}