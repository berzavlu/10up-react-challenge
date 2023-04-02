import * as types from '../types/movies'

const initialState = {
  movies: {
    data: null,
    loading: false,
    error: false,
  },
  movieDetail: {
    data: null,
    loading: false,
    error: false,
  },
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOVIES_FETCH_START:
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: true,
        }
      }
    case types.MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: action.payload,
        }
      }
    case types.MOVIES_FETCH_FAIL:
      return {
        ...state,
        movies: {
          ...state.movies,
          error: true,
          data: [],
        }
      }
    case types.MOVIES_FETCH_FINISH:
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: false,
        }
      }
      case types.MOVIES_FETCH_DETAIL_START:
        return {
          ...state,
          movieDetail: {
            ...state.movieDetail,
            loading: true,
          }
        }
      case types.MOVIES_FETCH_DETAIL_SUCCESS:
        return {
          ...state,
          movieDetail: {
            ...state.movieDetail,
            data: action.payload,
          }
        }
      case types.MOVIES_FETCH_DETAIL_FAIL:
        return {
          ...state,
          movieDetail: {
            ...state.movieDetail,
            error: true,
            data: {},
          }
        }
      case types.MOVIES_FETCH_DETAIL_FINISH:
        return {
          ...state,
          movieDetail: {
            ...state.movieDetail,
            loading: false,
          }
        }
  default:
    return state
  }
}

export default moviesReducer
