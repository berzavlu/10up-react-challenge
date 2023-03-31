import { Button } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../../redux/actions/movies'

const Movies = () => {
  const dispatch = useDispatch()

  const getData = () => {
    dispatch(fetchMovies())
  }

  
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Button>Movies Page</Button>
    </>
  )
}


export default Movies