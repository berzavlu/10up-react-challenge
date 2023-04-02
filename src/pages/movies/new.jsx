import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Breadcrumb, notification } from 'antd'
import { addNewMovie } from '../../redux/actions/movies'
import FormVideo from './components/form'

const NewMovieForm = () => {
  // State
  const [loading, setLoading] = useState(false)

  // Hooks
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Add new movie
  const onFinish = async (values) => {
    try {
      setLoading(true)
      const data = await dispatch(addNewMovie(values))
      notification.success({
        message: 'Success',
        description: 'Movie has been added'
      })
      navigate('/movies/' + data.insertedId)
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Something went wrong when trying to add new movie'
      })
      setLoading(false)
    }
  }

  const menuBreadcrumb = [
    {
      title: 'Home',
    },
    {
      title: <Link to='/movies'>Movies</Link>,
    },
    {
      title: 'Add New',
    }
  ]

  return (
    <div>
      <Breadcrumb items={menuBreadcrumb} />
      <h2>Add new movie</h2>
      <FormVideo onFinish={onFinish} loading={loading} />
    </div>
  )
}

export default NewMovieForm
