import axios from 'axios'
import { ERRORS, SET_PROFILE, SET_PROFILES, DELETE_PROFILE } from '../types';


/*ADD Profile */
export const AddProfile = (form, setShow, setMessage)=>dispatch=>{
    axios
    .post("/api/profiles", form)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
        dispatch({
            type: ERRORS,
            payload: err.response.data
        })
    });
}

/*GET A Profile */
export const GetProfile = ()=>dispatch=>{
    axios
      .get("/api/profile")
      .then(res => {
          dispatch({
              type: SET_PROFILE,
              payload: res.data
          })
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}

/*GET ALL Profiles */
export const GetProfiles = ()=>dispatch=>{
    axios
      .get("/api/profiles")
      .then(res => {
          dispatch({
              type: SET_PROFILES,
              payload: res.data
          })
      })
      .catch(err => {
          dispatch({
              type: ERRORS,
              payload: err.response.data
          })
      });
}

/*DELETE Profile */
export const DeleteProfile = (id)=>dispatch=>{
    if(window.confirm("are you sure to delete this user?")){
     axios
     .delete(`/api/profiles/${id}`)
     .then(res => {
         dispatch({
             type: DELETE_PROFILE,
             payload: id
         })
     })
     .catch(err => {
         dispatch({
             type: ERRORS,
             payload: err.response.data
         })
     });
    }
 }