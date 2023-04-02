import API from '../../utils/api'
import { API_URL } from '../../utils/constants'
import * as types from '../types/user'

export const doLogin = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({ type: types.USER_LOGIN_START })
    const payload = {
      email,
      password
    }
    const response = await API.post(API_URL + '/user/login', payload)
    console.log(response)
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