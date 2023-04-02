import React, { useEffect } from 'react'
import StarsRating from 'stars-rating'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../redux/actions/movies'
import { Breadcrumb, Col, Divider, Row } from 'antd'
import { Link } from 'react-router-dom'

const Movies = () => {
  const { movies } = useSelector((state) => state.moviesReducer)
  const dispatch = useDispatch()

  const getData = () => {
    dispatch(fetchMovies())
  }

  
  useEffect(() => {
    getData()
  }, [])

  if (movies.data === null || movies.loading) {
    return <div>loading movies</div>
  }

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: 'Movies',
          },
        ]}
      />
      <Divider orientation="left">Recently Added</Divider>
      <Row>
        {movies.data.map((movie, i) => 
          <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4} key={movie._id}>
            <div className='cardMovie'>
              <Link to={`/movies/${movie._id}`}>
                <div style={{ padding: '15px' }}>
                  <div className='cardMovie__img'>
                    <img style={{ width: '100%', height: '320px', objectFit: 'cover' }} src={movie.poster_path} alt={movie.title} />
                  </div>
                  <h3>{movie.title}</h3>
                  <StarsRating edit={false} value={movie.vote_average} count={5} size={24} color2={'#ffd700'} />
                </div>
              </Link>
            </div>
          </Col>
        )}
      </Row>
    </>
  )
}


export default Movies