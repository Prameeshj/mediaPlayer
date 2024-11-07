import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'



const Home = () => {
  const [deleteResponseFromView,setdeleteResponseFromView] = useState("")
  const [deleteResponseFromCategory,setdeleteResponseFromCategory] = useState("")
  const [addResponse,setAddResponse] = useState("")
  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container mb-5 d-flex justify-content-between">
        <Add setAddResponse={setAddResponse}/>
        <Link to={'/history'}>Watch History</Link>
      </div>
      <div className="container-fluid row my-5">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View setdeleteResponseFromView={setdeleteResponseFromView} deleteResponseFromCategory={deleteResponseFromCategory} addResponse={addResponse}/>
        </div>

        <div className="col-lg-6">
          <Category deleteResponseFromView={deleteResponseFromView} setdeleteResponseFromCategory={setdeleteResponseFromCategory} />
        </div>
      </div>
    </div>
  )
}

export default Home
