import { Link, withRouter } from 'react-router-dom';
import routes from '../routes';
const HomeMovieListView = ({ trendFilms }) => {
    return (
        <ul>
        {trendFilms.map(film => ( 
            <li key={film.id}> 
                <Link to={`${routes.movies}/${film.id}`}>
                    {film.title} 
                </Link>
            </li> 
        ))}
    </ul>  
    )
}

export default withRouter(HomeMovieListView);