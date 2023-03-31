import {
  MOVIES_FETCH_START,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FETCH_FAIL,
  MOVIES_FETCH_FINISH
} from '../types/movies'

const initialState = {
  movies: {
    data: null,
    loading: false,
    error: false,
  },
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_FETCH_START:
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: true,
        }
      }
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: action.payload,
        }
      }
    case MOVIES_FETCH_FAIL:
      return {
        ...state,
        movies: {
          ...state.movies,
          error: true,
        }
      }
    case MOVIES_FETCH_FINISH:
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: false,
        }
      }
  default:
    return state
  }
}

export default moviesReducer
