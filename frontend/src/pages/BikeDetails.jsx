import axios from "axios";
import React, {useEffect}from "react";
import {useDispatch,useSelector} from 'react-redux'
import { singleBikeAction } from "../action/bike-action";
export default function BikeDetails({ match }) {
    console.log(match)
    const dispatch = useDispatch()
    const { singleBikeredux, isloading } = useSelector(state => state.singleBike)
    useEffect(() => {
        dispatch(singleBikeAction(match.params.id))   
    },[])
    useEffect(() => {
         const getData=async()=>{
            const result=await axios.get(" http://localhost:5000/api/v1/signup")
            console.log(result)
         } 
         getData() 
    },[])


    return (
        <div className="alert alert-success " style={{height:"100vh"}}>
            <div className="container">
            <br />
            {
                isloading
                    ? <div className="spinner spinner-border"></div>
                    : <div className="row">
                        <br />
                    <div className="col-sm-4 offset-sm-4">
                        <div className="card">
                                <div className="card-body text-center">
                                    <div className="card-header">
                                    <img src={"http://localhost:5000/"+singleBikeredux.pic } className="img-fluid pb-2" alt="" /> <br />
                                <h5>Heading : {singleBikeredux.heading}</h5>
                                <h5>Desc : {singleBikeredux.desc}</h5>
                                    <h5>Price : {singleBikeredux.price}</h5>
                                    <button className="btn btn-success btn-sm px-4">Buy Bike</button>
                               </div>
                            </div>
                      </div>
                    </div>
                </div>
            }
        </div>
        </div>
    )
}