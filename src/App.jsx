import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Accordian from './components/accordian'
import RandomColor from "./components/randomColor"
import StarRating from './components/starRating'
import Home from "./components/home";
import ImageSlider from './components/imageSlider'
import LoadMore from './components/loadMore'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='accordian' element={<Accordian/>} />
        <Route path='randomColor' element={<RandomColor/>} />
        <Route path='starRating' element={<StarRating/>} />
        <Route path='imageSlider' element={<ImageSlider/>} />
        <Route path='loadMore' element={<LoadMore/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App