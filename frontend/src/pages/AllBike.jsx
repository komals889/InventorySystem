import axios from "axios";
import React, { useState } from "react";
 
import { Link } from "react-router-dom";
 

export default function AllBike({allData,match}){
              console.log(match)
              
     
    return <div className="card">
              <div className="card-body">
            <div className="card-header text-center">
            <img src={"http://localhost:5000/"+allData.pic } height="200px" width="100%" className="pb-3" alt="" /> <br />
                    <h5>Heading :{allData.heading}</h5>
                    <div>
                    <Link className="btn btn-danger btn-sm mt-2 mb-2" to={`/singleBike/${allData._id}`}>Show Details</Link>
                     </div>
                  </div>
              </div>
               
         </div>

}