import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LandingPage from "./views/landing/LandingPage";

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
