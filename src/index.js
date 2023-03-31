import React from 'react'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const configTheme = {
  token: {
    colorPrimary: '#32D788',
    colorText: '#062525',
    colorBlack1UP: '#303030',
  },
}

root.render(
  <React.StrictMode>
    <ConfigProvider theme={configTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
)
