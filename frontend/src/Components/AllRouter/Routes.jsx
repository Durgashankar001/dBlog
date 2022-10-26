import React from 'react'
import { Route,Routes } from 'react-router-dom'
import BlogPage from '../BlogPage/BlogPage'
import Homepage from '../Homepage/Homepage'
import Login from '../Login/Login'
import Signup from '../Login/Signup'
import Navbar from '../Navbar/Navbar'
import RequireAuth from './RequireAuth'

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
        <Route path='/blogs' element={
        <>
        <RequireAuth>
        <Navbar/>
        <BlogPage/>
        </RequireAuth>
        </>} ></Route>

    </Routes>
  )
}

export default AllRouter