import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import Movies from '../pages/movies'

global.matchMedia = global.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
  }
}

const moviesStateEmpty = {
  moviesReducer: {
    movies: {
      data: [],
      loading: false,
      error: false,
    }
  }
}

const moviesStateError = {
  moviesReducer: {
    movies: {
      data: [],
      loading: false,
      error: true,
    }
  }
}


describe("Movies Page", () => {
  it("validate to show a default message if store movies data is empty", async () => {
    const Component = (
      <BrowserRouter>
        <Provider store={configureStore([thunk])(moviesStateEmpty)}>
          <Movies />
        </Provider>
      </BrowserRouter>
    )
    render(Component)
    const text = screen.getByText("Looks like you don't have added any movies yet.")
    expect(text).toBeInTheDocument()
  })

  it("validate to show a default message if store movies has error from api", async () => {
    const Component = (
      <BrowserRouter>
        <Provider store={configureStore([thunk])(moviesStateError)}>
          <Movies />
        </Provider>
      </BrowserRouter>
    )
    render(Component)
    const text = screen.getByText("An error occurred")
    expect(text).toBeInTheDocument()
  })
})

