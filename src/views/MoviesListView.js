import { Link } from 'react-router-dom';
import routes from '../routes';

const MoviesListView = ({ movies }) => {
    return (
        <ul> 
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`${routes.movies}/${movie.id}`}>
                        {movie.title}
                    </Link> 
                </li>
            ))}
        </ul>
    )
}

export default MoviesListView;