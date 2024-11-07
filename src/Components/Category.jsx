import React, { useEffect, useState } from 'react'
import { Modal, Form, FloatingLabel, Button } from 'react-bootstrap'
import { getCategoryAPI, removeVideoAPI, saveCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import { deleteCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


const Category = ({setdeleteResponseFromCategory,deleteResponseFromView}) => {
  const [allCategories, setallCategories] = useState([])
  const [CategoryName, setCategoryName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSaveCategory = async () => {
    if (CategoryName) {
      const categoryDetails = { CategoryName, allVideos: [] }
      try {
        const result = await saveCategoryAPI(categoryDetails)
        if (result.status >= 200 && result.status < 300) {
          alert("Category Created")
          getallCategories()
          handleClose()
        }
      } catch (err) {
        console.log(err);

      }
    } else {
      alert("please provide the Details")
    }
  }

  const getallCategories = async () => {
    try {
      const result = await getCategoryAPI()
      if (result.status >= 200 && result.status < 300) {
        console.log(result.data);
        setallCategories(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getallCategories()
  },[deleteResponseFromView])


  const deleteCategory = async (id) => {
    try {
      await deleteCategoryAPI(id)
      getallCategories()
    } catch (err) {
      console.log(err);

    }
  }

  const dragOvercategory = (e) => {
    e.preventDefault()
  }
  const videoCardDropOvercategory = async (e, categoryDetails) => {
    console.log("inside videoCardDropOvercategory");
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);
    // update category by add video to its allvideos
    categoryDetails.allVideos.push(videoDetails)
    console.log(categoryDetails);
    // api call to make update the category
    await updateCategoryAPI(categoryDetails)
    getallCategories()
    const result = await removeVideoAPI(videoDetails.id)
    setdeleteResponseFromCategory(result)
  }


  const CategoryVideoDragStarted =(e,dragVideoDetails,categoryDetails)=>{
    console.log("inside CategoryVideoDragStarted");
    let dragData = {videos:dragVideoDetails,categoryDetails}
    e.dataTransfer.setData("dragData",JSON.stringify(dragData))
  }

  return (
    <>
      <div className='d-flex justify-content-around align-items-center'>
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>
       
       {/* display all category */}
       <div className="container-fluid mt-3">
        {/*  */}
       </div>



      {allCategories?.length > 0 ?
        allCategories?.map(categoryDetails => (
          <div droppable="true" onDragOver={dragOvercategory} onDrop={e => videoCardDropOvercategory(e, categoryDetails)} key={categoryDetails?.id} className="border rounded p-3 mb-3">
            <div className="d-flex justify-content-between">
              <h5>{categoryDetails?.CategoryName}</h5>
              <button onClick={() => deleteCategory(categoryDetails?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
             {/* display all videos */}
         <div className="row mt-2">
          {
            categoryDetails?.allVideos?.length>0 &&
            categoryDetails?.allVideos?.map(videos=>(
              <div draggable={true} onDragStart={e=>CategoryVideoDragStarted(e,videos,categoryDetails)} key={videos?.id} className='col-lg-4'>
                {/* videocard */}
                <VideoCard insideCategory={true} displayData={videos}/>
              </div>
            ))
          }
          
          </div>
          </div>
        ))
        :
        <div className='fw-bolder text-danger fs-5'>No Categories are added yet!!</div>
      }

      <Modal
        centered show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel className='mt-2' controlId="floatingCategoryName" label="Category Name">
            <Form.Control onChange={e => setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSaveCategory} className='btn btn-info' variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category
