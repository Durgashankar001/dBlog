import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from '../Homepage/Homepage'
import Login from '../Login/Login'
import Signup from '../Login/Signup'
import Navbar from '../Navbar/Navbar'

const AllRouter = () => {
  return (
    <Routes>
        <Route path='/' element={
        <>
        <Navbar/>
        <Homepage/>
        </>} ></Route>
        <Route path='/login' element={
        <>
        <Navbar/>
        <Login/>
        </>} ></Route>
        <Route path='/signup' element={
        <>
        <Navbar/>
        <Signup/>
        </>} ></Route>

    </Routes>
  )
}

export default AllRouter