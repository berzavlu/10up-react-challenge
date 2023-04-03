import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from '../pages/login'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store';

global.matchMedia = global.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
  }
}

const Component = (
  <BrowserRouter>
    <Provider store={store}>
      <Login />
    </Provider>
  </BrowserRouter>
)

describe("Login Page", () => {
  it("validate if has email input", async () => {
    render(Component)
    const input = screen.getByTestId('email-input')
    expect(input).toBeInTheDocument()
  })
  it("validate if has password input", async () => {
    render(Component)
    const input = screen.getByTestId('password-input')
    expect(input).toBeInTheDocument()
  })
})

