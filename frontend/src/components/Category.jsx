import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { updateDataAction } from '../action/bike-action'


export default function Category() {
    const { userloginRedux } = useSelector(state => state.userLogin)
    const [categoryName,setcategoryName]=useState("")
    const [data,setdata]=useState([])
    const [name,setname]=useState("")
    const [id,setid]=useState("")
    let userId=userloginRedux?.info?._id
    const postData=async(e)=>{
        e.preventDefault()
        userId=userloginRedux?.info?._id
        const result=await axios.post(`http://localhost:5000/api/v1/category`,{userId:userId,categoryName:categoryName}) 
        console.log(result)
        getCategory()
    }
    const getCategory=async()=>{
        
        const {data}=await axios.get(`http://localhost:5000/api/v1/category/${userId}`)
        console.log(data)
        setdata(data.data)
    }
    useEffect(()=>{
        getCategory()
    },[])
    const handleupdateData=async(e)=>{
        e.preventDefault()
        const {data}=await axios.put(`http://localhost:5000/api/v1/category/${id}`,{categoryName:name})
        console.log(data);
        getCategory()
    }
    const updateData=(id)=>{
        setid(id)
        console.log(id)
        const res=data.filter(item=>item._id==id)
        console.log(res);
        setname(res[0].categoryName)
    }
  return (
    <div className='container-fluid mt-5'> 
         <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <div className="card-header">
                        add category
                    </div>
                    <div className="card-body">
                        <form onSubmit={postData}>
                        <label htmlFor="">Category Name</label><br />
                        <input type="text" className='form-control' onChange={e=>setcategoryName(e.target.value)}/><br />
                        <button className='btn btn-success w-100'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
         </div>
          
          <div className="row">
            <div className="col-sm-10 offset-sm-1">

          <div className="row">
          {data?.map((item) => (
              <div className="col-sm-2" key={item._id}>
                  <br />
                  <div className='card'>
                    <div className="card-body">
                      {/* <img src={"http://localhost:5000/" + item.pic} alt="" height="150px" width="100%" className='img-fluid' /> */}
                      <p>Name : <strong>{item.categoryName}</strong> </p>
                       
                      <button className='btn btn-outline-danger' data-bs-target="#delete" data-bs-toggle="modal"  ><i class="bi bi-trash-fill"></i></button>
                      <button className='btn btn-outline-success ms-3' data-bs-target="#update" data-bs-toggle="modal" onClick={e=>{
                          updateData(item._id)
                        }}><i class="bi bi-pencil-square"></i></button>
                  </div>
                </div>
            </div>
         ))}
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
            <form onSubmit={handleupdateData}> 
              <label htmlFor="">Name</label><br />
              <input type="text" placeholder='enter Heading' value={name}  required  onChange={(e)=>{
                setname(e.target.value)
              }}  className='form-control'/><br />
               
               <button className='btn btn-info' data-bs-dismiss="modal">update</button>
               <button className='btn btn-warning ms-2' type='button' data-bs-dismiss="modal">Cancel</button>
              </form>
            </div>
          </div>
        </div>
         </div>
    </div>
  )
}
