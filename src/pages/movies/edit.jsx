import { Breadcrumb, Button, Form, Input, notification, Rate, Result, Select, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchMovieDetail, updateMovieDetail } from '../../redux/actions/movies'

const EditMovieForm = () => {
  const [loading, setLoading] = useState(false)
  const { movieDetail } = useSelector((state) => state.moviesReducer)
  const { movieId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getMovieData = async () => {
    await dispatch(fetchMovieDetail(movieId))
  }

  const onFinish = async (values) => {
    console.log('values', values)
    try {
      setLoading(true)
      await dispatch(updateMovieDetail(values, movieId))
      notification.success({
        message: 'Success',
        description: 'Movie has been updated'
      })
      navigate('/movies/' + movieId)
    } catch (error) {
      console.log('error', error)
      setLoading(false)
      notification.error({
        message: 'Error',
        description: 'Something went wrong trying to update the movie'
      })
    }
  }

  useEffect(() => {
    getMovieData()
  }, [])

  if (movieDetail.data === null || movieDetail.loading) {
    return (
      <>
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
          },
        ]}
      />
      <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Spin size='large' /><br />
        <span>Loading Movie detail</span>
      </div>
      </>
    )
  }

  if (movieDetail.error) {
    return (
      <>
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
          },
        ]}
      />
      <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Result
          status="error"
          title="An error occurred"
          subTitle="Movie detail not found or something went wrong with the server."
        />
      </div>
      </>
    )
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
        initialValues={{
          title: movieDetail.data.title,
          image: movieDetail.data.poster_path,
          description: movieDetail.data.overview,
          rate: movieDetail.data.vote_average,
          youtubeId: movieDetail.data.youtubeId,
        }}
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
          <Button type="primary" htmlType="submit" loading={loading}>
            Update Movie
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EditMovieForm
