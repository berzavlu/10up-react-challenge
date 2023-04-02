import React, { useEffect } from 'react'
import { Breadcrumb, Button, Card, Col, Modal, notification, Rate, Result, Row, Space, Spin, Tag } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { fetchMovieDetail, deleteMovie } from '../../redux/actions/movies'
import { GENRES } from '../../utils/constants';

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
      notification.error({
        message: 'Error',
        description: 'Something went wrong when trying to delete the movie.',
      })
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
      <div style={{ height: 'calc(100vh - 223px)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
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
      <div style={{ height: 'calc(100vh - 223px)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
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
        <Col xs={24} md={6} style={{ paddingRight: '15px' }}>
          <img style={{ width: '100%', borderRadius: '5px' }} src={movieDetail.data.poster_path} alt={movieDetail.data.title} />
          <br/><br/>
            <div style={{ paddingBottom: '5px' }}>
              <b>Actions: </b>
            </div>
            <div style={{ paddingBottom: '15px' }}>
              <Space wrap>
                <Button type="primary" onClick={handleEdit}>
                  Edit
                </Button>
                <Button onClick={handleDelete}>Delete</Button>
              </Space>
            </div>
        </Col>
        <Col xs={24} md={18}>
          <Card title='Information' bordered={true}>
            <b>Title:</b>
            <div>{movieDetail.data.title}</div>
            <br/>
            <b>Description:</b>
            <div>{movieDetail.data.overview}</div>
            <br/>
            <b>Genres:</b>{' '}
            <div>
            {GENRES.filter(x => movieDetail.data.genres.some(y => y === x.id)).map((genre) => (
              <Tag key={genre.id}>{genre.name}</Tag>
            ))}
            </div>
            <br/>
            <b>Rating:</b> <br />
            <Rate value={movieDetail.data.vote_average} disabled />
            <br/>
            <br/>
            <b>Trailer</b>
            <br/>
            <div class="video-container">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${movieDetail.data.youtubeId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </div>
          </Card>
        </Col>
      </Row>
      {contextHolder}
    </div>
  )
}

export default MovieDetail
