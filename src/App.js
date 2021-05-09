import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// import MoviesPage from './components/MoviesPage';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';

const HomePageViews = lazy(() =>
    import('./views/HomePageViews' /* webpackChunkName: "home-view" */),
);

// const MovieListView = lazy(() => 
//     import('./views/MovieListView' /* webpackChunkName: "movie-details-view" */),
// )

function App () {

    return (
        <>
        <AppBar />
    
        <Suspense fallback={<h1>Загружаем...</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomePageViews} />
            {/* <Route path={routes.authors} component={AuthorsView} />
            <Route exact path={routes.books} component={BooksView} /> */}
            {/* <Route path={routes.movieDetails} component={MovieDetailsView} /> */}
            {/* <Route component={NotFoundView} /> */}
          </Switch>
        </Suspense>
      </>

        // <AppBar />
        // <HomePage jkhkj={user} />
        // <MoviesPage user={user} />
        // {/* <MovieDetailsPage /> */}
        // {/* <Cast />
        // <Reviews /> */}


    );
}
export default App;