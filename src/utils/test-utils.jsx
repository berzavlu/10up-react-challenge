import * as React from "react"
import { render as rtlRender } from "@testing-library/react"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import configureStore from "redux-mock-store"

const render = (
  component,
  {
    initialState,
    store = configureStore([thunk])(initialState),
    ...renderOptions
  } = {
    initialState: {
      /* any default state you want */
    }
  }
) => {
  return rtlRender(component, {
    wrapper: TestWrapper(store),
    ...renderOptions
  })
}

const TestWrapper = store => ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export * from "@testing-library/react"
// override the built-in render with our own
export { render }
