import React from "react";
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";



export const Student = () => {

    const [data , setData] = useState()

    useEffect(() => {
        Data()
    },[])

    const Data = () => {
        axios.get("https://studentddata.herokuapp.com/student").then(function(res){
            // setData(res.data)
            console.log("avid" , res.data)
        })
    }



    return(




        <div>
            <h1>Student</h1>



        </div>
    )
}