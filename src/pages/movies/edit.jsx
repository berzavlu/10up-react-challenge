import { Breadcrumb, notification, Result, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchMovieDetail, updateMovieDetail } from '../../redux/actions/movies'
import FormVideo from './components/form'

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

  const initialValues = {
    title: movieDetail.data.title,
    image: movieDetail.data.poster_path,
    description: movieDetail.data.overview,
    genres: movieDetail.data.genres,
    rate: movieDetail.data.vote_average,
    youtubeId: movieDetail.data.youtubeId,
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
      <FormVideo onFinish={onFinish} loading={loading} initialValues={initialValues} />
    </div>
  )
}

export default EditMovieForm
