import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';

const MoviesListView = ({ movies, location }) => {
    return (
        <ul> 
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={{ 
                        pathname: `${routes.movies}/${movie.id}`,
                        state: {
                            from: location,
                        },
                        }}>
                        {movie.title}
                    </Link> 
                </li>
            ))}
        </ul>
    )
}

export default withRouter(MoviesListView);