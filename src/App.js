import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout'
import Movies from './pages/movies'
import MovieDetail from './pages/movies/detail'
import NewMovieForm from './pages/movies/new'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<Navigate replace to="/movies" />}
        />
        <Route
          index
          path="movies"
          element={<Movies />}
        />
        <Route
          path="movies/:movieId"
          element={<MovieDetail />}
        />
        <Route
          path="movies/add-new"
          element={<NewMovieForm />}
        />
      </Route>
      <Route
        path="*"
        element={<div>Not Found</div>}
      />
    </Routes>
  )
}

export default App
