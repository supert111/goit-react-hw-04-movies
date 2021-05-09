import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import MoviesPage from './components/MoviesPage';
import AppBar from './components/AppBar/AppBar';
import routes from './routes';

const HomeView = lazy(() =>
  import('./views/HomePageViews.js' /* webpackChunkName: "home-view" */),
);

function App () {
    // const user = {
    //     name: 'Iryna',
    // };

    return (
        <>
        <AppBar />
    
        <Suspense fallback={<h1>Загружаем...</h1>}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            {/* <Route path={routes.authors} component={AuthorsView} />
            <Route exact path={routes.books} component={BooksView} />
            <Route path={routes.bookDetails} component={BookDetailsView} />
            <Route component={NotFoundView} /> */}
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