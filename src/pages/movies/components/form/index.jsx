import { Button, Form, Input, Rate, Select } from 'antd'
import React from 'react'
import { GENRES } from '../../../../utils/constants'

const rules = {
  title: [
    {
      required: true,
      message: 'Title is required',
    },
  ],
  image: [
    {
      required: true,
      message: 'Image URL is required',
    },
  ],
  description: [
    {
      required: true,
      message: 'Description is required',
    }
  ],
  genres: [
    {
      required: true,
      message: 'Genres is required',
    }
  ],
  rate: [
    {
      required: true,
      message: 'Rate is required',
    }
  ],
  youtubeId: [
    {
      required: true,
      message: 'Youtube ID is required',
    }
  ]
}

const FormVideo = ({ onFinish, loading, initialValues }) => {
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      autoComplete='off'
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <div>Title: </div>
      <Form.Item name='title' rules={rules.title}>
        <Input placeholder='Add title' />
      </Form.Item>

      <div>Image: </div>
      <Form.Item name='image' rules={rules.image}>
        <Input placeholder='Insert URL image' />
      </Form.Item>

      <div>Description:</div>
      <Form.Item name='description' rules={rules.description}>
        <Input.TextArea rows={6} placeholder='Add description' />
      </Form.Item>

      <div>Genre: </div>
      <Form.Item name='genres' rules={rules.genres}>
        <Select placeholder='Select Genres' mode='multiple' allowClear>
          {GENRES.map((genre) => (
            <Select.Option key={genre.id} value={genre.id}>
              {genre.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <div>Rating: </div>
      <Form.Item name='rate' rules={rules.rate}>
        <Rate />
      </Form.Item>

      <span>Trailer Video: </span>
      <Form.Item name='youtubeId' rules={rules.youtubeId}>
        <Input prefix='https://www.youtube.com/watch?v=' placeholder='Youtube ID' />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
        <Button type='primary' htmlType='submit' loading={loading}>
          {initialValues ? 'Update Movie' : 'Add Movie'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormVideo
