import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/muisc.gif'
import feature1 from '../assets/img1.jpeg'
import feature2 from '../assets/img3.jpeg'
import feature3 from '../assets/img4.jpeg'
import { Card } from 'react-bootstrap'

const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      <div className='row align-items-center'>
        <div className="col-lg-5">
          <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/Home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5' src={LandingImg} alt="Landing image" />
        </div>
      </div>
      
      {/* feature part */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">

          <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>Managing Songs</Card.Title>
        <Card.Text>
        Users can upload, view and remove the videos.
        </Card.Text>
      </Card.Body>
    </Card>
    
          </div>
          <div className="col-lg-4">

          <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature2} />
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
        Users can categorise the videos by drag and drop feature.
        </Card.Text>
      </Card.Body>
    </Card>
    
          </div>
          <div className="col-lg-4">

          <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={'250px'} variant="top" src={feature3} />
      <Card.Body>
        <Card.Title>High Quality Videos</Card.Title>
        <Card.Text>
        High Quality Videos of different types of Musics
        </Card.Text>
      </Card.Body>
    </Card>
    
          </div>
        </div>
      </div>

      {/* last */}
<div className="my-5 row align-items-center border rounded p-5">
  <div className="col-5">
    <h3 className='text-warning '>Simple, Fast & Powerful</h3>
    <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis architecto ex porro ut necessitatibus voluptatem culpa rerum facilis error veritatis quaerat, laudantium nam alias delectus accusamus voluptatum ratione quasi?</p>

    <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Categories Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis architecto ex porro ut necessitatibus voluptatem culpa rerum facilis error veritatis quaerat, laudantium nam alias delectus accusamus voluptatum ratione quasi?</p>

    <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Managing History</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis architecto ex porro ut necessitatibus voluptatem culpa rerum facilis error veritatis quaerat, laudantium nam alias delectus accusamus voluptatum ratione quasi?</p>

    <div className="col">
    </div>
  </div>
  <div className="col-6 m-4">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/exkJKrAVzAc" title="STHUTHI | Bougainvillea | Jyothirmayi | Kunchacko Boban | Amal Neerad | Sushin Shyam | Fahadh Faasil" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>     
</div>
    </div>
    
    

  )
}

export default Landing
