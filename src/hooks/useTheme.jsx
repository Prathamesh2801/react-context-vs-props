import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function useTheme() {
    const [theme,setTheme] = useState(()=>{
        return localStorage.getItem("theme") || "light"
    })

    useEffect(()=>{
        localStorage.setItem("theme",theme);
        document.body.setAttribute("data-bs-theme",theme);
    },[theme])

    function toggleTheme() {
        setTheme((preVal)=>(preVal==="light"?"dark":"light"));
    }
  return {theme,toggleTheme}
}
