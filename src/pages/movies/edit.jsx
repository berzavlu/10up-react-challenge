import { Breadcrumb, Button, Form, Input, Rate, Select } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const EditMovieForm = () => {
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
            title: 'Edit Movie',
          }
        ]}
      />
      <h2>Edit Movie</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <div>Title: </div>
        <Form.Item
          name="title"
        >
          <Input placeholder="Add title" />
        </Form.Item>
        <div>Image: </div>
        <Form.Item
          name="url"
        >
          <Input placeholder="Insert URL image" />
        </Form.Item>
        <div>Description:</div>
        <Form.Item
          name="description"
        >
          <Input.TextArea rows={6} placeholder="Add description" />
        </Form.Item>
        <div>Genre: </div>
        <Form.Item
          name="genre"
        >
          <Select
            placeholder="Select Genre"
            mode="multiple"
            allowClear
          >
            <Select.Option value="male">male</Select.Option>
            <Select.Option value="female">female</Select.Option>
            <Select.Option value="other">other</Select.Option>
          </Select>
        </Form.Item>
        <div>Rating: </div>
        <Rate onChange={() => null} value={0} />
        <br/><br/>
        <span>Trailer Video: </span>
        <Form.Item
          name="youtube"
        >
          <Input prefix='https://www.youtube.com/watch?v=' placeholder="Youtube ID" />
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Update Movie
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EditMovieForm
