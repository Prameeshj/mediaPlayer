import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className='d-flex justify-content-between '>
        {/* intro */}
        <div style={{height:'400px'}}>
          <h5> <i className='fa-solid fa-music me-2'> </i> Media Player</h5>
          <p>
          Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
          </p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className='d-flex flex-column ms-2'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'black'}}>LandingPage</Link>
          <Link to={'/Home'} style={{textDecoration:'none',color:'black'}}>HomePage</Link>
          <Link to={'/History'} style={{textDecoration:'none',color:'black'}}>HistoryPage</Link>
        </div>
        {/* guides */}
        <div className='d-flex flex-column ms-3'>
          <h5>Guides</h5>
          <a style={{textDecoration:'none',color:'Black'}} href="http://react.dev/" target='blank'>React</a>
          <a style={{textDecoration:'none',color:'Black'}} href="https://reactrouter.com/en/main" target='blank'>ReactRouter</a>
          <a style={{textDecoration:'none',color:'Black'}} href="https://react-bootstrap.netlify.app/" target='blank'>ReactBootstrap</a>

        </div>
        {/* contact */}
        <div className='d-flex flex-column ms-3' >
          <h5>Contact</h5>
          <div className='d-flex'>
            <input placeholder='Enter Your E-mail Here!!' type="text" className='form-control me-2' />
            <button className='btn btn-info'> <i className='fa-solid fa-arrow-right me-2'> </i> </button>
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <a href="https://www.facebook.com/" style={{textDecoration:'none',color:'black'}} target='blank'> <i className='fa-brands fa-facebook '> </i> </a>
            <a href="https://www.facebook.com/" style={{textDecoration:'none',color:'black'}} target='blank'> <i className='fa-brands fa-instagram me'> </i> </a>
            <a href="https://www.facebook.com/" style={{textDecoration:'none',color:'black'}} target='blank'> <i className='fa-brands fa-twitter'> </i> </a>
            <a href="https://www.facebook.com/" style={{textDecoration:'none',color:'black'}} target='blank'> <i className='fa-brands fa-linkedin'> </i> </a>
            <a href="https://www.facebook.com/" style={{textDecoration:'none',color:'black'}} target='blank'> <i className='fa-brands fa-github'> </i> </a>
            <a href="https://www.facebook.com/" style={{textDecoration:'none',color:'black'}} target='blank'> <i className='fa-solid fa-phone'> </i> </a>


          </div>
        </div>
      </div>
      <p className='text-center mt-3' >CopyRight &copy; July 2024 Batch ,Media Player App .Built With React</p>
    </div>
  )
}

export default Footer
