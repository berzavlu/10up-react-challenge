import API from '../../utils/api'
import { API_URL } from '../../utils/constants'
import * as types from '../types/movies'

export const fetchMovies = () => async (dispatch) => {
  try {
    dispatch({ type: types.MOVIES_FETCH_START })

    const response = await API.get(API_URL + '/movies/list')
    dispatch({
      type: types.MOVIES_FETCH_SUCCESS,
      payload: response.data.data
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

    const response = await API.get(API_URL + '/movies/' + id)

    dispatch({
      type: types.MOVIES_FETCH_DETAIL_SUCCESS,
      payload: response.data.data
    })
  } catch (error) {
    console.log(error)
    dispatch({ type: types.MOVIES_FETCH_DETAIL_FAIL })
  } finally {
    dispatch({ type: types.MOVIES_FETCH_DETAIL_FINISH })
  }
}
