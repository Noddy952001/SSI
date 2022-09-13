import { useState } from 'react'
import './App.css'
import {Navbar} from "./Component/Navbar"
import { Add_Student } from './Component/Add_student';
import { Update_Student } from './Component/Update_student';
import { Student } from './Component/Student';
import {  Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Student />}/>
        <Route path="/addstudent" element={<Add_Student />}/>
        <Route path="/update_Student" element={<Update_Student/>}/>
      </Routes>
     
    </div>
  )
}

export default App
