import React, { useEffect } from 'react'
import StarsRating from 'stars-rating'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../redux/actions/movies'
import { Breadcrumb, Button, Col, Divider, Empty, Row, Spin } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

const Movies = () => {
  const { movies } = useSelector((state) => state.moviesReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getData = () => {
    dispatch(fetchMovies())
  }

  const goToAddMovie = () => {
    navigate('/movies/add-new')
  }

  
  useEffect(() => {
    getData()
  }, [])

  if (movies.data === null || movies.loading) {
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
      <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Spin size='large' /><br />
        <span>Loading Movies</span>
      </div>
      </>
    )
  }

  if (movies.data.length === 0) {
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
      <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{ height: 60 }}
          description={
            <span>
              Looks like you don't have added any movies yet.
            </span>
          }
        >
          <Button type="primary" onClick={goToAddMovie}>Add New Movie</Button>
        </Empty>
      </div>
      </>
    )
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