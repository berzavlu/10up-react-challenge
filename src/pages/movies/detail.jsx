import React, { useEffect } from 'react'
import { Breadcrumb, Button, Card, Col, Row, Space, Tag } from 'antd';
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieDetail, fetchMovieVideo } from '../../redux/actions/movies'
import StarsRating from 'stars-rating';

const MovieDetail = () => {
  const { movieId } = useParams()
  const { movieDetail, movieDetailVideo } = useSelector((state) => state.moviesReducer)
  const dispatch = useDispatch()

  const getMovieData = async () => {
    await dispatch(fetchMovieDetail(movieId))
    await dispatch(fetchMovieVideo(movieId))
  }

  useEffect(() => {
    getMovieData()
  }, [])

  if (movieDetail.data === null || movieDetail.loading) {
    return <div>loading movie detail</div>
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
            title: movieDetail.data.title,
          },
        ]}
      />
      <br />
      <Row>
        <Col span={6}>
          <img style={{ width: '320px', borderRadius: '5px' }} src={`https://image.tmdb.org/t/p/w500${movieDetail.data.poster_path}`} alt={movieDetail.data.title} />
          <br/><br/>
          <Space wrap>
            <b>Actions: </b>
            <Button type="primary">
              Edit
            </Button>
            <Button>Delete</Button>
          </Space>
        </Col>
        <Col span={18}>
          <Card title='Information' bordered={true}>
            <b>Title:</b>
            <div>{movieDetail.data.title}</div>
            <br/>
            <b>Description:</b>
            <div>{movieDetail.data.overview}</div>
            <br/>
            <b>Genres:</b>{' '}
            <div>
              {movieDetail.data.genres.map((genre) => (
                <Tag key={genre.id}>{genre.name}</Tag>
              ))}
            </div>
            <br/>
            <b>Rating:</b>
            <StarsRating edit={false} value={movieDetail.data.vote_average / 2} count={5} size={24} color2={'#ffd700'} />
            <br/>
            <b>Trailer</b>
            {(movieDetail.data === null || movieDetail.loading ? <div>Loading...</div> : (
              <div>
                {movieDetailVideo.data?.length === 0 ? <div>Trailer not found</div> : (
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${movieDetailVideo.data?.[0].key}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  />
                )}
              </div>
            ))}

          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default MovieDetail
