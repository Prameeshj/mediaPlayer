import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, saveVideoAPI, updateCategoryAPI } from '../services/allAPI'


const View = ({addResponse,deleteResponseFromCategory,setdeleteResponseFromView}) => {
  const [deleteVideoResponse, setdeleteVideoResponse] = useState("")
  const [allVideos, setAllVideos] = useState([])

  useEffect(() => {
    getAllVideos()
  }, [addResponse, deleteVideoResponse, deleteResponseFromCategory])
  console.log(allVideos);

  const getAllVideos = async () => {
    try {
      const result = await getAllVideosAPI()
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setAllVideos(result.data)

      }
    } catch (err) {
      console.log(err);

    }
  }
    const dragOverView = (e)=>{
      e.preventDefault()
    }

    const categoryVideoDropOverView =async(e)=>{
      console.log("Inside categoryVideoDropOverView");
      const {videos,categoryDetails} = JSON.parse(e.dataTransfer.getData("dragData"))
      console.log(videos,categoryDetails);
      const updateCategoryvideoList = categoryDetails?.allVideos?.filter(item=>item.id!=videos?.id)
      const updateCategory = {...categoryDetails,allVideos:updateCategoryvideoList}
      console.log(updateCategory);
       
      // updating the category by delete video from category using API
      const result = await updateCategoryAPI(updateCategory)
      // use state lift to communicate data from view to category
      setdeleteResponseFromView(result)
      // use API to uplpad video
      await saveVideoAPI(videos)
      // call getAllVideos Function
      getAllVideos() 

    }

  return (
    <>
      <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDropOverView(e)}>
        {
          allVideos?.length > 0 ?
            allVideos?.map(video => (
              <Col key={video?.id} className='mb-2' sm={12} md={6} lg={4}>
                <VideoCard setdeleteVideoResponse={setdeleteVideoResponse} displayData={video} />
              </Col>
            ))
            :
            <div className="fw-bolder text-danger fs-5">No Videos are Uploaded Yet!!</div>
        }
      </Row>
    </>
  )
}

export default View
