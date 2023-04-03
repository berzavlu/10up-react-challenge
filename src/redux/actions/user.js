import API from '../../utils/api'
import * as types from '../types/user'

export const doLogin = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({ type: types.USER_LOGIN_START })
    const payload = {
      email,
      password
    }
    const response = await API.post('/user/login', payload)
    localStorage.setItem('token', response.data.data.token)
    dispatch({
      type: types.USER_LOGIN_SUCCESS,
      payload: {
        token: response.data.data.token,
      }
    })
  } catch (error) {
    dispatch({ type: types.USER_LOGIN_FAIL })
    throw Error(error.response.data.message)
  } finally {
    dispatch({ type: types.USER_LOGIN_FINISH })
  }
}

export const doLogout = () => (dispatch) => {
  dispatch({ type: types.USER_LOGOUT_SUCCESS })
  localStorage.removeItem('token')
}
