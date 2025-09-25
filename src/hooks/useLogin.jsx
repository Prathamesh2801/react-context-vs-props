import React from 'react'
import { use } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function useLogin() {
    const [user, setUser] = useState(()=>{
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : {
            un:'',em:''
        }
    });

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(user))
    },[user]);

    
      function logout() {
        setUser({
          un: "",
          em: "",
        });

        localStorage.removeItem("user")
      }
  return {user,setUser,logout}
}
