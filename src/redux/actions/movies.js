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