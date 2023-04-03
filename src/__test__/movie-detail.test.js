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

describe("Detail Movie Page", () => {
  it("validate if show the title value from store", async () => {
    render(Component)
    const text = screen.getByDisplayValue('Black Panther: Wakanda Forever')
    expect(text).toBeInTheDocument()
  })
})

