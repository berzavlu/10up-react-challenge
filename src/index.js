import React from 'react'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#32D788',
            colorText: '#062525',
            colorBlack1UP: '#303030',
          },
        }}
      >
        <App />
      </ConfigProvider>
  </React.StrictMode>
)
