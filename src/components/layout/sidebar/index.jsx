import React from 'react'
import { StarOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label: (
      <a href
        to={path}
      >
        {label}
      </a>
    ),
  }
}


const items = [
  getItem('Movies', '/movies', <StarOutlined />, null, '/movies'),
]

function Sidebar() {
  const {
    token: { colorBlack1UP },
  } = theme.useToken()

  const styleLogo = {
    margin: 16,
    marginBottom: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const logoURL = 'https://10up.com/wp-content/themes/10up-sept2016/dist/img/10up-logo-full.svg'

  return (
    <Layout.Sider style={{ background: colorBlack1UP }}>
      <div style={styleLogo}>
        <img src={logoURL} alt="Logo 10UP" style={{ width: '60px' }} />
      </div>
      <Menu theme="light" mode="inline" items={items} />
    </Layout.Sider>
  )
}

export default Sidebar
