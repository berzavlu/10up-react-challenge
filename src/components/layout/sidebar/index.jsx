import React from 'react'
import { StarOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import { Link, useLocation, useParams } from 'react-router-dom'

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label: (
      <Link
        to={path}
      >
        {label}
      </Link>
    ),
  }
}


const items = [
  getItem('Movies', '/', <StarOutlined />, [
    getItem(
      'All Movies',
      '/movies',
      <StarOutlined />,
      null,
      '/movies'
    ),
    getItem(
      'Add New',
      '/movies/add-new',
      <StarOutlined />,
      null,
      '/movies/add-new'
    ),
  ], null),
  getItem('Gender', '/gender-movies', <StarOutlined />, null, '/gender-movies'),
]

function Sidebar() {
  const {
    token: { colorBlack1UP },
  } = theme.useToken()
  const params = useParams()

  const location = useLocation()

  const validateChildRoute = () => {
    if (params?.movieId) {
      return '/movies'
    }
    return location.pathname
  }

  const getCurrentSelected = () => {
    return validateChildRoute(location.pathname)
  }

  console.log('params', params)

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
      <Menu
        theme="dark"
        mode="inline"
        items={items}
        defaultSelectedKeys={getCurrentSelected()}
        defaultOpenKeys={['/']}
      />
    </Layout.Sider>
  )
}

export default Sidebar
