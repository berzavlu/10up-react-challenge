import * as types from '../types/user'

const initialState = {
  user: {
    data: {
      token: localStorage.getItem('token')
    },
    loading: false,
    error: false,
  },
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_START:
      return {
        ...state,
        user: {
          ...initialState.user,
          loading: true,
        }
      }
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          data: action.payload,
        }
      }
    case types.USER_LOGIN_FAIL:
      return {
        ...state,
        user: {
          ...state.user,
          error: true,
        }
      }
    case types.USER_LOGIN_FINISH:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
        }
      }
  default:
    return state
  }
}

export default userReducer
