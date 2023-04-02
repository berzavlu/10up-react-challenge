import React from 'react'
import {
  Avatar,
  Dropdown,
  Layout,
  Menu,
  notification,
  Space,
  theme
} from 'antd'
import { UserOutlined, LogoutOutlined, CaretDownFilled } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { doLogout } from '../../../redux/actions/user'
import { useNavigate } from 'react-router-dom'

function Content(props) {
  const { token: { colorBgContainer } } = theme.useToken()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onExit = () => {
    dispatch(doLogout())
    navigate('/login')
    notification({
      message: 'Logout',
      description: 'Logout successfully'
    })
  }

  const menu = (
    <Menu style={{ marginRight: 1 }}>
      <Menu.Item onClick={onExit}>
        <LogoutOutlined />
        <span style={{ marginLeft: '10px' }}>Exit</span>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout className="site-layout">
      <Layout.Header
        style={{
          padding: '0px 15px 0px 0px',
          background: colorBgContainer,
          textAlign: 'right',
        }}
      >
        <Dropdown overlay={menu} arrow placement="bottomRight" trigger={['click']}>
          <Space style={{ cursor: 'pointer' }}>
            <Avatar icon={<UserOutlined />} />
            <div>Options <CaretDownFilled /></div>
          </Space>
        </Dropdown>
      </Layout.Header>
      <Layout.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: colorBgContainer, minHeight: 'calc(100vh - (64px + 89px))' }}>
          {props.children}
        </div>
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        10UP ©2023 Created by Luis Berrospi
      </Layout.Footer>
    </Layout>
  )
}

export default Content