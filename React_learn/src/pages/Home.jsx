import Movie from "../components/Movie";
import { useState,useEffect } from "react";
import { searchmov,getpopmovies } from "../services/api";
import Nav from "../components/Nav";
import "../css/Home.css"

function Home() {

    const [data,setData]=useState("")

//   const Movies = [
//     { id: 1, title: "kinkong", release_date: 2020 },
//     { id: 2, title: "frozen", release_date: 2056 },
//     { id: 3, title: "coco", release_date: 2012 },
//     { id: 4, title: "godzilla", release_date: 2011 },
//   ];
    
    const[movies,setmov]=useState([])
    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        const loadopmovies=async()=>
        {
            try{
                const popmovies= await getpopmovies()
                setmov(popmovies)
            }catch(err){
                console.log(err)
                setError("failed to load")
            }
            finally{
                setLoading(false)
            }
        }
        loadopmovies()

    },[])

  const handleSearch=async(e)=>{
    
    e.preventDefault()
    if (!data.trim()) return
    if (loading) return
    setLoading(true)
    try{
        const searchres= await searchmov(data)
        setmov(searchres)
        setError(null)

    }catch(err){
        console.log(err)
        setError("failed to search")
    }
    finally{
        setLoading(false)
    }
    setData("")

  };

  return (
    
    <div className="home">
               
        <form onSubmit={handleSearch} className="search-form">
            
            <input type="text" placeholder="Search for movies.." className="search-input" 
            value={data} onChange={(e)=>setData(e.target.value)}/>
            <button type="submit" className="search-button"> Submit</button>
        </form>
      <div className="movies-grid">

        {error && <div className="error-message">{error}</ div>}             
            

       { loading?(<div className="loading">Loading..</div>):movies.map((mov) => (<Movie movie={mov} key={mov.id} />
        ))}

        
      </div>
    </div>
  );
}
export default Home;
