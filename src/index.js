import React from 'react'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const configTheme = {
  token: {
    colorPrimary: '#df2b26',
    colorText: '#303030',
    colorBlack1UP: '#303030',
  },
}

root.render(
  <BrowserRouter>
    <ConfigProvider theme={configTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </BrowserRouter>
)
