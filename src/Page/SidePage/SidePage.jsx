import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Satistics from '../Statistics/Satistics'
import Home from '../Home/Home'
export default function SidePage() {
  return (
    <main className='w-screen  p-1 lg:p-5 md:p-10  bg-neutral-200'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/statistics' element={<Satistics />} />
      </Routes>
    </main>
  )
}
