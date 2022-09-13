import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="Navbar">
            <div  style={{display : "flex" , justifyContent : "space-between"}}>
            <Link to="/">Student</Link>
            <Link to="/addstudent">Add Student</Link>
            <Link to="/update">Update Student</Link>
            </div>
        </div>
    )
}