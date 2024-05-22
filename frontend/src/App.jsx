import React from 'react'
import ApptBook from './pages/ApptBook'
import DrDetails from './pages/DrDetails'
import Home from './pages/Home'
import Login from './pages/Login'
import {Routes, Route, Navigate} from 'react-router-dom'
import SignUp from './pages/SignUp'
import Layout from './components/Layout';
import {ToastContainer} from 'react-toastify'
import Doctor from './pages/Doctor'

export default function App() {
  return (
    <>
    <ToastContainer/>
      <Routes >
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/drdetails/:drId" element={<DrDetails />} />
          <Route path="/apptbook" element={<ApptBook />} />
          <Route path="/doctor" element={<Doctor />} />
        </Route>
      </Routes>
      </>
  )}

