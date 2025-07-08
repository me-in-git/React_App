import "../css/Movie.css"
import { usemovcontext } from "../contexts/Moviecont"
//import PropTypes from "prop-types"

function Movie({movie}){

    const {addtofavs,removefavs,isfavs }=usemovcontext()
    const favourite=isfavs(movie.id)

    function whenliked(e)

    {
        e.preventDefault()
        if (favourite) removefavs(movie.id)
        else addtofavs(movie)
       
    }

    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${ favourite?"active" :""}`} onClick={whenliked}>🤍</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>


    )
}
export default Movie