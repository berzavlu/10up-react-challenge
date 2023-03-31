import React from 'react'
import { Layout as LayoutAnd } from 'antd'
import Sidebar from './sidebar'
import Content from './content'

function Layout(props) {
  return (
    <LayoutAnd style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Content>
        {props.children}
      </Content>
    </LayoutAnd>
  )
}

export default Layout