import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { saveVideoAPI } from '../services/allAPI'


const Add = ({setAddResponse}) => {
  const [invalidYoutubeLink,setInvalidYoutubeLink] = useState(false)
  const [VideoDetails,setVideoDetails] = useState({
    caption:"",imgUrl:"",youTubeLink:""
  })

  console.log(VideoDetails);
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractingEmbededLinkFromYoutubeLink =(UserInputYoutubeLink)=> {
      // steps creating embebed youtubelink
      if(UserInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
        console.log(UserInputYoutubeLink.split("v=")[1].slice(0,11));
        const videoId =UserInputYoutubeLink.split("v=")[1].slice(0,11)
        setInvalidYoutubeLink(false)
        setVideoDetails({...VideoDetails,youTubeLink:`https://www.youtube.com/embed/${videoId}`})
      }else{
        setInvalidYoutubeLink(true)
        setVideoDetails({...VideoDetails,youTubeLink:""})

      }
  }

  const handleUploaodVideo =async()=>{
    const {caption,imgUrl,youTubeLink}=VideoDetails
    if(caption && imgUrl && youTubeLink){
      try{
        const result = await saveVideoAPI(VideoDetails)
        console.log(result);
        if(result.status>=200 && result.status<300){
          alert("video Uploaded Successfully")
          handleClose()
          // pass result to view component
          setAddResponse(result)
        }else{
          console.log(result);
          
        }
      }catch(err){
        console.log(err); 
      }
    }else{
      alert("Please fill the form")
    }
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-2 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
          <FloatingLabel controlId="floatingPassword" label="Video Caption">
        <Form.Control onChange={e=>setVideoDetails({...VideoDetails,caption:e.target.value})} className='mt-2' type="text" placeholder="Caption" />
      </FloatingLabel>

      <FloatingLabel className='mt-2' controlId="floatingPassword" label="Video image URL">
        <Form.Control onChange={e=>setVideoDetails({...VideoDetails,imgUrl:e.target.value})} type="text" placeholder="Video image URL" />
      </FloatingLabel>

      <FloatingLabel className='mt-2' controlId="floatingPassword" label="Video Youtube URL">
        <Form.Control onChange={e=>extractingEmbededLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Youtube URL" />
      </FloatingLabel>
      
      {        
        invalidYoutubeLink &&
        <div className="text-danger fw-bolder mt-2">
          Invalid Youtube Link...Please try With Other!!!
        </div>
      }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploaodVideo} className='btn btn-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
