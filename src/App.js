import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout'
import Movies from './pages/movies'
import MovieDetail from './pages/movies/detail'
import NewMovieForm from './pages/movies/new'
import EditMovieForm from './pages/movies/edit'
import Login from './pages/login'
import { useSelector } from 'react-redux'

const App = () => {
  const { user } = useSelector((state) => state.userReducer)
  return (
    <Routes>
      <Route
        path="login"
        element={<Login />}
      />
      <Route element={!user.data.token ? <Navigate replace to="/login" /> : <Layout />}>
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
        <Route
          path="movies/edit/:movieId"
          element={<EditMovieForm />}
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
