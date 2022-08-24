import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findPostDataAction } from "../action/bike-action";
import { getAllBikeAction } from "../action/bike-action";
import CategoryList from "../components/CategoryList";
import AllBike from "./AllBike";
export default function Home() {
    const dispatch = useDispatch()
    const { bikeredux,isloading} = useSelector(state => state.userBike)
    console.log(bikeredux);
    useEffect(() => {
        dispatch(getAllBikeAction())
    },[])
    const {findPostData} = useSelector(state=> state.findpostdata)
    const { userloginRedux } = useSelector(state => state.userLogin)
    const [data,setdata]=useState([])
    const [categoryDetails,setcategoryDetails]=useState([])     
    const getData=(name)=>{
      console.log(name)
      console.log(findPostData)
      const res=findPostData?.filter((item)=>item.category===name)
      console.warn(res)
      setcategoryDetails(res)
    //   console.log(category)
    }
    useEffect(()=>{
      getData()
    },[])
    let userId=userloginRedux?.info?._id
  const getCategory=async()=>{
        
    const {data}=await axios.get(`http://localhost:5000/api/v1/category/${userId}`)
    console.log(data)
    setdata(data?.data)     
  }   
  useEffect(()=>{
    getCategory()  
    dispatch(findPostDataAction(userloginRedux.info._id))  
},[])
    const [categoryName,setcategoryName]=useState("")
    return<div className=" alert alert-info">
        <br />
        <div className="container-fluid">
        <div className="row">
            <div className="col-sm-3">
            <label htmlFor="">Select Category</label><br />
            <select name="" id="" className='form-control' onChange={e=>{setcategoryName(e.target.value)
                    getData(e.target.value)}}>
                        <option value="">select</option>
                        
                    {
                      data?.map((item)=>(
                         <>                          
                        <option >{item.categoryName}</option>
                         </>
                      ))
                    }
                  </select><br />
            </div>
            {
                isloading
                    ? <div className="spinner spinner-border"></div>
                    :bikeredux.map((item) => (
                        <div className="col-sm-4 mt-3" key={item._id}>
                                 <AllBike allData={item}/>
                        </div>
                    ))
               }
    </div>
       </div>
                    {
                        isloading?
                        <div className="spinner spinner-border"></div>:
                        categoryDetails.map((item)=>{
                            <div className="col-sm-4 mt-3" key={item._id}>
                                <p>{item?.heading}</p>
                                         <CategoryList categoryData={item}/>
                                </div>
                        })
                    }
    </div>
}