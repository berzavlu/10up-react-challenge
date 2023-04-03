import API from '../../utils/api'
import * as types from '../types/movies'

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch({ type: types.MOVIES_FETCH_START })

    const response = await API.get('/movies/list')
    dispatch({
      type: types.MOVIES_FETCH_SUCCESS,
      payload: response.data.data
    })
  } catch (error) {
    dispatch({ type: types.MOVIES_FETCH_FAIL })
    throw Error(error.response.data.message)
  } finally {
    dispatch({ type: types.MOVIES_FETCH_FINISH })
  }
}

export const fetchMovieDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.MOVIES_FETCH_DETAIL_START })

    const response = await API.get('/movies/' + id)

    dispatch({
      type: types.MOVIES_FETCH_DETAIL_SUCCESS,
      payload: response.data.data
    })
  } catch (error) {
    dispatch({ type: types.MOVIES_FETCH_DETAIL_FAIL })
    throw Error(error.response.data.message)
  } finally {
    dispatch({ type: types.MOVIES_FETCH_DETAIL_FINISH })
  }
}

export const addNewMovie = (formData) => async (dispatch) => {
  try {
    dispatch({ type: types.MOVIES_ADD_NEW_START })
    const payload = {
      title: formData.title,
      vote_average: formData.rate,
      poster_path: formData.image,
      overview: formData.description,
      genres: formData.genres,
      youtubeId: formData.youtubeId
    }
    const response = await API.post('/movies/new', payload)

    dispatch({ type: types.MOVIES_ADD_NEW_SUCCESS })
    return response.data.data
  } catch (error) {
    dispatch({ type: types.MOVIES_ADD_NEW_FAIL })
    throw Error(error.response.data.message)
  } finally {
    dispatch({ type: types.MOVIES_ADD_NEW_FINISH })
  }
}

export const deleteMovie = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.MOVIE_DELETE_START })
    const response = await API.delete('/movies/delete/' + id)

    dispatch({
      type: types.MOVIE_DELETE_SUCCESS,
      payload: response.data.data
    })
  } catch (error) {
    dispatch({ type: types.MOVIE_DELETE_FAIL })
    throw Error(error.response.data.message)
  } finally {
    dispatch({ type: types.MOVIE_DELETE_FINISH })
  }
}

export const updateMovieDetail = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: types.MOVIE_UPDATE_START })
    const payload = {
      title: formData.title,
      vote_average: formData.rate,
      poster_path: formData.image,
      overview: formData.description,
      genres: formData.genres,
      youtubeId: formData.youtubeId
    }
    const response = await API.put('/movies/update/' + id, payload)

    dispatch({ type: types.MOVIE_UPDATE_SUCCESS })
    return response.data.data
  } catch (error) {
    dispatch({ type: types.MOVIE_UPDATE_FAIL })
    throw Error(error.response.data.message)
  } finally {
    dispatch({ type: types.MOVIE_UPDATE_SUCCESS })
  }
}
