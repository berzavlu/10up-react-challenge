import API from '../../utils/api'
import * as types from '../types/movies'

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch({ type: types.MOVIES_FETCH_START })

    const API_KEY = 'ebcb5ad4cf3146bc639ffa7b54c35765'
    const response = await API.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

    dispatch({
      type: types.MOVIES_FETCH_SUCCESS,
      payload: response.data.results
    })
  } catch (error) {
    console.log(error)
    dispatch({ type: types.MOVIES_FETCH_FAIL })
  } finally {
    dispatch({ type: types.MOVIES_FETCH_FINISH })
  }
}


export const fetchMovieDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.MOVIES_FETCH_DETAIL_START })

    const API_KEY = 'ebcb5ad4cf3146bc639ffa7b54c35765'
    const response = await API.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)

    dispatch({
      type: types.MOVIES_FETCH_DETAIL_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    console.log(error)
    dispatch({ type: types.MOVIES_FETCH_DETAIL_FAIL })
  } finally {
    dispatch({ type: types.MOVIES_FETCH_DETAIL_FINISH })
  }
}

export const fetchMovieVideo = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.MOVIES_FETCH_DETAIL_VIDEO_START })

    const API_KEY = 'ebcb5ad4cf3146bc639ffa7b54c35765'
    const response = await API.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)

    dispatch({
      type: types.MOVIES_FETCH_DETAIL_VIDEO_SUCCESS,
      payload: response.data.results
    })
  } catch (error) {
    console.log(error)
    dispatch({ type: types.MOVIES_FETCH_DETAIL_VIDEO_FAIL })
  } finally {
    dispatch({ type: types.MOVIES_FETCH_DETAIL_VIDEO_FINISH })
  }
}