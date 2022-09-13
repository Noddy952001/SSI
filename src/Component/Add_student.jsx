import React from "react";
import axios from "axios"
import { useState } from "react";



export const Add_Student = () => {

    const  [firstname , setfirstname]  = useState()
    const  [Lastname , setLastname]  = useState()
    const  [email , setemail]  = useState()
    const  [address , setaddress]  = useState()

 
    const data = {
        First_name : firstname,
        Last_name : Lastname,
        Email : email,
        Address : address

    }
       
    const handelSubmit = () => {

        axios.post("https://studentddata.herokuapp.com/student", data).then(function(res){
            console.log(res.data)
        })

    }



    return(
        <div>
            <h1>Add_Student</h1>
        
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
            >Add</button>
        </div>
    )
}