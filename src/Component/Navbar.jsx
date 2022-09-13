import React from "react";

import { Add_Student } from "./Add_student";
import { Update_Student } from "./Update_student";
import { Student } from "./Student";
import { Link } from "react-router-dom";



export const Navbar = () => {
    return(
        <div>
            <div style={{display : "flex" , justifyContent : "space-between"}}>
            <Link to="/">Student</Link>
            <Link to="/addstudent">Add Student</Link>
            <Link to="/update_Student">Update Student</Link>
            </div>
        </div>
    )
}