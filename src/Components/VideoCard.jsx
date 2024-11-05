import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';


const VideoCard = ({displayData,setdeleteVideoResponse,insideCategory}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    // display modal
    setShow(true);
    // stote history in json
    const {caption,youTubeLink} = displayData
    const sysDateTime = new Date()
    console.log(sysDateTime.toLocaleString('en-US',{timeZoneName:'short'}));
    const timeStamp = sysDateTime.toLocaleString('en-US',{timeZoneName:'short'})
    const historyDetails = {caption,youTubeLink,timeStamp}
    try{
      await saveHistoryAPI(historyDetails)
    }catch(err){
      console.log(err); 
    }
  }

  const deleteVideo = async(id)=>{
    try{
      const result = await removeVideoAPI(id)
      setdeleteVideoResponse(result)
    }catch(err){
      console.log(err);
      
    }
  }

    const VideoCardDragStarted =(e,dragVideoDetails)=>{
      console.log("inside VideoCardDragStarted with videoId :" +dragVideoDetails?.id);
      // share data using event drag start
      e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
      
    }
    
  return (
    <>
      <Card draggable={true} onDragStart={e=>VideoCardDragStarted(e,displayData)} style={{ height: '280px' }}>
      <Card.Img onClick={handleShow} variant="top" height={'170px'} src={displayData?.imgUrl} />
      <Card.Body>
        <Card.Text className='d-flex justify-content-between'>
          <p >{displayData?.caption}</p>
          {
           !insideCategory && <button onClick={()=>deleteVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            }
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="540" height="292" src={`${displayData?.youTubeLink}?autoplay=1`} title="Caption; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>
    
    </>
  )
}

export default VideoCard
