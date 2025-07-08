import { createContext,useState,useContext,useEffect } from "react";

const Moviecontext=createContext()
export const usemovcontext=()=> useContext(Moviecontext)
export const Movprov=({children})=>{

    const[favs,setfav]=useState([])
    useEffect(()=>{
            const storedfavs=localStorage.getItem("favs")
            if(storedfavs)setfav(JSON.parse(storedfavs))

    },[])

    useEffect(()=>{
            localStorage.setItem('favs',JSON.stringify(favs))

    },[favs])
    
    const addtofavs=(mov)=>{
        setfav(prev =>[...prev,mov])
    }
    const removefavs=(movid)=>{
        setfav(prev =>prev.filter(mov=> mov.id!==movid))
    }
    const isfavs=(movid)=>{
        return favs.some(mov=>mov.id===movid)
    }

    const value=
    {
       favs,addtofavs,removefavs,isfavs 
    }

    return <Moviecontext.Provider value={value}>
        {children}
    </Moviecontext.Provider>


}
