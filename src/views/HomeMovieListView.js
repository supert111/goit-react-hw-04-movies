import { Link, withRouter } from 'react-router-dom';

const HomeMovieListView = ({ trendFilms }) => {
    return (
        <ul>
        {trendFilms.map(film => ( 
            <li key={film.id}> 
                <Link to={`/movies/${film.id}`}>
                    {film.title} 
                </Link>
            </li> 
        ))}
    </ul>  
    )
}

export default withRouter(HomeMovieListView);