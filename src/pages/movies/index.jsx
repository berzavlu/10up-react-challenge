import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../redux/actions/movies'
import { Col, Divider, Row } from 'antd'

const Movies = () => {
  const { movies } = useSelector((state) => state.moviesReducer)
  const dispatch = useDispatch()

  const getData = () => {
    dispatch(fetchMovies())
  }

  
  useEffect(() => {
    if (movies.data === null) {
      getData()
    }
  }, [movies.data])

  console.log(movies.data)

  if (movies.data === null || movies.loading) {
    return <div>loading movies</div>
  }

  return (
    <>
      <Divider orientation="left">Recently Added</Divider>
      <Row>
        {movies.data.map((movie, i) => 
          <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4} key={movie.id}>
            <div style={{ maxWidth: '320px', padding: '25px' }}>
              <img style={{ width: '100%' }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          </Col>
        )}
      </Row>
    </>
  )
}


export default Movies