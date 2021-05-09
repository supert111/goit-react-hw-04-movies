import { Link, withRouter } from 'react-router-dom'

const MovieListView = ({ trendFilms, match }) => {
    return (
        <ul>
        {trendFilms.map(film => ( 
            <li key={film.id}> 
                <Link to={`${match.url}/${film.id}`}>
                    {film.title} 
                </Link>
            </li> 
        ))}
    </ul>  
    )
}

export default withRouter(MovieListView);