import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getAllHistoryAPI } from '../services/allAPI'


const History = () => {

  const [allVideoHistory,setAllVideoHistory]=useState([])
  const getAllHistory=async()=>{
    try{
      const result=await getAllHistoryAPI()
      if(result.status>=200 && result.status<300){
          setAllVideoHistory(result.data)
          console.log(allVideoHistory);
      }
      else{
        console.log(result.status);
      }
    }
    catch(err){
      console.log(err);
      
    }
  }

   
  useEffect(()=>{
    getAllHistory()
  },[])

  const removeHistory = async(id)=>{
    try{
      await deleteHistoryAPI(id)
      getAllHistory()
    }catch(err){
    console.log(err);
    }
  }

  return (
    <div style={{paddingTop:'100px'}} className='text-center'>
      <h3>Watch History</h3>
      <Link to={'/home'}>Back to Home</Link>
      <table className='container my-5 table'>
      <div className="container d-flex justify-content-between">
      </div>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Stamp</th>
            <th>...</th>
          </tr>
        </thead>
        
        {
      allVideoHistory?.length>0?
        allVideoHistory?.map((history,index)=>(
        <tbody key={history.id}>
          <tr>
            <td>{index+1}</td>
            <td>{history.caption}</td>
            <td><a style={{color:'blue'}} target='_blank' href={history.youTubeLink}>{history.youTubeLink}</a></td>
            <td>{history.timeStamp}</td>
            <td><button onClick={()=>removeHistory(history?.id)} className='btn'>
              <i className='fa-solid fa-trash text-danger'></i></button></td>
          </tr>
        </tbody>
       )):
       <div><h2 className='text-danger'>No History</h2></div>}
       </table>
    </div>
  )
}

export default History