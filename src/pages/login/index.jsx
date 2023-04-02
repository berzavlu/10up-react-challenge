import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, notification } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { doLogin } from '../../redux/actions/user'

function Login() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onFinish = async (values) => {
    try {
      setLoading(true)
      await dispatch(doLogin(values))
      navigate('/movies')
      notification.success({
        message: 'Login',
        description: 'Login successfully'
      })
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <img src="https://10up.com/wp-content/themes/10up-sept2016/dist/img/10up-logo-full.svg" alt="Login"/>
      <div className="login-box">
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
