'use client'
import { useEffect } from "react"


function useDebounce(value , n) {

    let debouncedValue 

    useEffect( () => {
     const id = setTimeout( () => {
        // Could Make an api call after a certain time 
        console.log("hook called")
        return debouncedValue = value
     }, n * 1000)

     return () => clearTimeout(id)
    },[value])

  return debouncedValue
}

export default useDebounce;