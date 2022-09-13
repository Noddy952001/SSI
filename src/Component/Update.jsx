import React from "react";
import axios from "axios"
import { useState } from "react";
import { useParams } from "react-router-dom"

export const Update = () => {

    const  [firstname , setfirstname]  = useState()
    const  [Lastname , setLastname]  = useState()
    const  [email , setemail]  = useState()
    const  [address , setaddress]  = useState()
    const {id} = useParams()

 
    const data = {
        First_name : firstname,
        Last_name : Lastname,
        Email : email,
        Address : address
    }
       
    const handelSubmit = () => {
        axios.patch(`https://studentddata.herokuapp.com/student/${id}`, data).then(function(res){
            console.log(res.data)
        })
    }

    return(
        <div>
            <h1>Update Student Details</h1>
        
            <label>First Name</label>
            <input 
                type="text"
                placeholder="Enter FirsrName"
                onChange={(e) => {
                    setfirstname(e.target.value)
                }}
            /> 
            <br />

            <label>Last Name</label>
            <input 
                type="text"
                placeholder="Enter lastName"
                onChange={(e) => {
                    setLastname(e.target.value)
                }}
            /> 
            <br />

            <label>Email</label>
            <input 
                type="text"
                placeholder="Enter Email"
                onChange={(e) => {
                    setemail(e.target.value)
                }}
            /> 
            <br />

            <label>Address</label>
            <input 
                type="text"
                placeholder="Enter Address"
                onChange={(e) => {
                    setaddress(e.target.value)
                }}
            /> 
            <br />

            <button
                onClick={handelSubmit}
            >Update</button>
        </div>
    )
}