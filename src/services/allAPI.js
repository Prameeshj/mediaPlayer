
import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// uploada videosAPI = post http rqst called ADD component

export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${serverURL}/uploadVideos`,videoDetails)
}

// getAllVideosAPI = get http rqst called view component when compponent diaplayed in broweser insixe its useeffect hook

export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/uploadVideos`,{})
}

// saveHistoryAPI = save watched  history http://localhost:3000/history by videocard component

export const saveHistoryAPI = async (historyDetails)=>{
    return await commonAPI("POST",`${serverURL}/history`,historyDetails)
}

// getAllHistoryAPI = get rqst to  history http://localhost:3000/history to see in browser when it open

export const getAllHistoryAPI = async (historyDetails)=>{
    return await commonAPI("GET",`${serverURL}/history`,historyDetails)
}

// deleteHistoryAPI = delete rqst to  history http://localhost:3000/history 

export const deleteHistoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

// removeVideoAPI = delete http rqst called view component when user clicks delete button

export const removeVideoAPI = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/uploadVideos/${id}`,{})
}

// saveCategoryAPI = post http rqst to http://localhost:3000/categories called categories component when user clicks add button
// categories ={categoryname , allvideos}

export const saveCategoryAPI =async (categoryDetails)=>{
    return await commonAPI("POST",`${serverURL}/categories/`,categoryDetails)
}

// getCategoryAPI = get http rqst to http://localhost:3000/categories called categories component when user open browser

export const getCategoryAPI =async ()=>{
    return await commonAPI("GET",`${serverURL}/categories/`,{})
}

// deleteCategoryAPI = delete http rqst called view component when user clicks delete button

export const deleteCategoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`,{})
}

// updateCategoryAPI = put rqst to http://localhost:3000/categories called by category component when video drop over the category

export const updateCategoryAPI =async (categoryDetails)=>{
    return await commonAPI("PUT",`${serverURL}/categories/${categoryDetails.id}`,categoryDetails)
}