import { useState } from 'react'
import Sidebar from './compenants/SideBarre'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Page/SidePage/SidePage'
import SidePage from './Page/SidePage/SidePage'

function App() {

  return (
    <>
    	<div class="flex">
        <Sidebar />
        <SidePage />
      </div>
    </>
  )
}

export default App
