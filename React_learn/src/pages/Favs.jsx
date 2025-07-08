import "../css/Favs.css"
import { usemovcontext } from "../contexts/Moviecont"
import Movie from "../components/Movie"
function Favs()
{
    const {favourites}=usemovcontext();
    if (favourites){
        return (

            <div className="favourites">
        
          <div className="movies-grid">
            {error && <div className="error-message">{error}</div>}

            {loading ? (
              <div className="loading">Loading..</div>
            ) : (
              favourites.map((mov) => <Movie movie={mov} key={mov.id} />)
            )}
          </div>
          </div>
        );
    }
    return(
        <div className="favorites-empty">
            <h2>No Favs Yet</h2>
            <p>Start adding Fvas and they appear here</p>

        </div>


    )
}
export default Favs