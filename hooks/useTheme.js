'use client'

import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"

export default function useTheme(){
    const value = useContext(ThemeContext)
    // console.log("Theme value", value)
    return value
}