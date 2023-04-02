import React, { useEffect } from 'react'
import { Breadcrumb, Button, Card, Col, Modal, Result, Row, Space, Spin, Tag } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { fetchMovieDetail, deleteMovie } from '../../redux/actions/movies'
import StarsRating from 'stars-rating';

const MovieDetail = () => {
  const { movieId } = useParams()
  const { movieDetail } = useSelector((state) => state.moviesReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [modal, contextHolder] = Modal.useModal()

  const getMovieData = async () => {
    await dispatch(fetchMovieDetail(movieId))
  }

  const onDelete = async () => {
    try {
      await dispatch(deleteMovie(movieId))
      navigate('/movies')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovieData()
  }, [])

  const handleDelete = () => {
    modal.confirm({
      title: 'Delete Movie',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure to delete this movie?',
      okText: 'Delete',
      cancelText: 'Cancel',
      onOk: async () => onDelete(),
      onCancel() {},
    });
  }

  const handleEdit = () => {
    navigate(`/movies/edit/${movieId}`)
  }

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
            title: 'Detail',
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
            title: 'Detail',
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
            title: 'Detail',
          },
        ]}
      />
      <br />
      <Row>
        <Col span={6}>
          <img style={{ width: '320px', borderRadius: '5px' }} src={movieDetail.data.poster_path} alt={movieDetail.data.title} />
          <br/><br/>
          <Space wrap>
            <b>Actions: </b>
            <Button type="primary" onClick={handleEdit}>
              Edit
            </Button>
            <Button onClick={handleDelete}>Delete</Button>
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
            <br/>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${movieDetail.data.youtubeId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
          </Card>
        </Col>
      </Row>
      {contextHolder}
    </div>
  )
}

export default MovieDetail
