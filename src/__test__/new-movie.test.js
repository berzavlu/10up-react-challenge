import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import NewMovieForm from '../pages/movies/new'
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
      <NewMovieForm />
    </Provider>
  </BrowserRouter>
)

describe("New Movie Page", () => {
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

