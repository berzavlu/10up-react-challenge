import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout as LayoutAnd } from 'antd'
import Sidebar from './sidebar'
import Content from './content'

function Layout(props) {
  return (
    <LayoutAnd style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </LayoutAnd>
  )
}

export default Layout