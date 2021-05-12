import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import routes from './routes';

const HomePageViews = lazy(() =>
    import('./views/HomePageViews' /* webpackChunkName: "home-view" */),
);

const MoviesPageViews = lazy(() =>
    import('./views/MoviesPageViews' /* webpackChunkName: "movies-view" */),
);

const MovieDetailsPageView = lazy(() => 
    import('./views/MovieDetailsPageView' /* webpackChunkName: "movies-details-view" */),
);

const NotFoundView = lazy(() => 
    import('./views/NotFoundView' /* webpackChunkName: "page-404-view" */)
);

function App () {

    return (
      <>
        <AppBar />
    
        <Suspense fallback={<h1>Загружаем...</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomePageViews} />
            <Route path={routes.movieDetails} component={MovieDetailsPageView} />
            <Route path={routes.movies} component={MoviesPageViews} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </>
    );
}

export default App;