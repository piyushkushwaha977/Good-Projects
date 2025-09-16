'use client'
import { useEffect , useState } from "react"


function useDebounce(value , n) {
    const [ valueToBeDebounced, setValueToBeDebounced] = useState('')

    useEffect( () => {
     const id = setTimeout( () => {
        // Could Make an api call after a certain time 
        console.log("hook called")
        setValueToBeDebounced(value)
        return valueToBeDebounced
     }, 3000)

     return () => clearTimeout(id)
    },[value])

  return valueToBeDebounced
}

export default useDebounce;