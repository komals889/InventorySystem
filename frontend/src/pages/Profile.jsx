import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
export default function Profile({history}) {
    const { userloginRedux } = useSelector(state => state.userLogin)
    const {findPostData,isloading} = useSelector(state=> state.findpostdata)
    const [updateEmail,setupdateEmail]=useState("")
    const [updatePassaword,setupdatePassword]=useState("")
    const [updateName,setupdateName]=useState("")
    const [data,setdata]=useState({})
     const[userid,setuserid]=useState(userloginRedux?.info?._id)
    const { bikeredux } = useSelector(state => state.userBike)
    useEffect(() => {
        if (!userloginRedux) {
              history.push("/login")
          }  
    },[])
    const getData=async()=>{
     const {data}=await axios.get(`http://localhost:5000/api/v1/signup/${userid}`)
     console.log(data)
     setdata(data.data)
    }
    useEffect(()=>{
       getData()
    },[])
    const handleupdateData=async(id)=>{
      //  setuserid(id)
      console.warn(userid)
      const {data}= await axios.get(`http://localhost:5000/api/v1/signup/${id}`)
      console.log(data.data)
      setupdateEmail(data.data.email)
      setupdatePassword(data.data.password)
      setupdateName(data.data.name)
      getData()
    }
    const updateData=async(e)=>{
      e.preventDefault()
      console.log(userid)
      const fd=new FormData()
      fd.append("name",updateName)
      fd.append("email",updateEmail)
      const result=await axios.put(`http://localhost:5000/api/v1/signup/${userid}`,{name:updateName,email:updateEmail})
      console.log(result)
      getData()
    }
  return (
      <div className='container'>
          <br />
           <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <div className="card" >
                <div className="card-header">
                  Profile
                </div> 
                  <div className="card-body">
                  <div className="card-header">
                  <div className="list-group">
                      <div className="list-group-item">
                      Name : <span>{data.name}</span>
                      </div>
                      <div className="list-group-item">
                        Email : <span>{data.email}</span>
                      </div> 
                      {/* <div className="list-group-item">
                        Password : <span>{data.password}</span>
                      </div>  */}
                      <button className='btn btn-outline-success' data-bs-target="#update" data-bs-toggle="modal" onClick={(e)=>{
                        handleupdateData(userloginRedux?.info._id)
                      }}>Update</button>
                    </div>
                  </div>
                  </div>
              </div>

            </div>
          </div>
          <div className="modal fade" id="update" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                update Data
            </div>
            <div className="modal-body">
            <form onSubmit={updateData}> 
              <label htmlFor="">Email</label><br />
              <input type="text"      required value={updateEmail} onChange={e=>setupdateEmail(e.target.value)}   className='form-control'/><br />
              <label htmlFor="">Name</label><br />
              <input type="text" required  value={updateName} onChange={e=>setupdateName(e.target.value)}   className='form-control'/><br />
              
              {/* <label htmlFor="">Password</label><br />
              <input type="text" required  value={updatePassaword} onChange={e=>setupdatePassword(e.target.value)}   className='form-control'/><br /> */}
              
                 
               <button className='btn btn-info' data-bs-dismiss="modal" >update</button>
               <button className='btn btn-warning ms-2' type='button' data-bs-dismiss="modal">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
