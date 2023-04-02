import { Breadcrumb, Button, Form, Input, Rate, Select, notification } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addNewMovie } from '../../redux/actions/movies'

const NewMovieForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onFinish = async (values) => {
    console.log('values', values)
    try {
      const data = await dispatch(addNewMovie(values))
      notification.success({
        message: 'Success',
        description: 'Movie has been added'
      })
      navigate('/movies/' + data.insertedId)
    } catch (error) {
      console.log('error', error)      
    }
  }

  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: <Link to='/movies'>Movies</Link>,
          },
          {
            title: 'Add New',
          }
        ]}
      />
      <h2>Add new Movie</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete="off"
        onFinish={onFinish}
      >
        <div>Title: </div>
        <Form.Item name="title">
          <Input placeholder="Add title" />
        </Form.Item>
        <div>Image: </div>
        <Form.Item name="image">
          <Input placeholder="Insert URL image" />
        </Form.Item>
        <div>Description:</div>
        <Form.Item name="description">
          <Input.TextArea rows={6} placeholder="Add description" />
        </Form.Item>
        <div>Genre: </div>
        <Form.Item name="genres">
          <Select
            placeholder="Select Genres"
            mode="multiple"
            allowClear
          >
            <Select.Option value="male">male</Select.Option>
            <Select.Option value="female">female</Select.Option>
            <Select.Option value="other">other</Select.Option>
          </Select>
        </Form.Item>
        <div>Rating: </div>
        <Form.Item name="rate">
          <Rate />
        </Form.Item>
        <span>Trailer Video: </span>
        <Form.Item name="youtubeId">
          <Input prefix='https://www.youtube.com/watch?v=' placeholder="Youtube ID" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add Movie
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default NewMovieForm
