import React from "react";
import ReactRouterDom, { Route } from "react-router-dom";
import MoviesList from "./MoviesList";

function MoviesPage({ movies }) {
  return (
    <div>
      <ReactRouterDom>
        <Route>
        <MoviesList movies={movies} />
        </Route>
      </ReactRouterDom>
      
    </div>
  );
}
export default MoviesPage;
