import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import EditMovieForm from '../pages/movies/edit'

global.matchMedia = global.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
  }
}

const movieDetailState = {
  moviesReducer: {
    movieDetail: {
      data: {
        _id: '642a142df81d98966352d681',
        title: 'Black Panther: Wakanda Forever',
        vote_average: 5,
        poster_path: 'https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
        overview: 'Mock review',
        genres: [
          1,
          2,
          9,
          15,
          16
        ],
        youtubeId: 'gTPFVKfjFrU'
      },
      loading: false,
      error: false,
    },
  }
}

const Component = (
  <BrowserRouter>
    <Provider store={configureStore([thunk])(movieDetailState)}>
      <EditMovieForm />
    </Provider>
  </BrowserRouter>
)

describe("Edit Movie Page", () => {
  it("autocomplete input values with data from store", async () => {
    render(Component)
    const text = screen.getByDisplayValue('Black Panther: Wakanda Forever')
    expect(text).toBeInTheDocument()
  })
  it("validate if has title input", async () => {
    render(Component)
    const input = screen.getByTestId('title-input')
    expect(input).toBeInTheDocument()
  })
  it("validate if has image input", async () => {
    render(Component)
    const input = screen.getByTestId('image-input')
    expect(input).toBeInTheDocument()
  })
  it("validate if has description input", async () => {
    render(Component)
    const input = screen.getByTestId('description-input')
    expect(input).toBeInTheDocument()
  })
  it("validate if has genres input", async () => {
    render(Component)
    const input = screen.getByTestId('genres-input')
    expect(input).toBeInTheDocument()
  })
  it("validate if has rate input", async () => {
    render(Component)
    const input = screen.getByTestId('rate-input')
    expect(input).toBeInTheDocument()
  })
  it("validate if has youtubeId input", async () => {
    render(Component)
    const input = screen.getByTestId('youtubeId-input')
    expect(input).toBeInTheDocument()
  })
})

