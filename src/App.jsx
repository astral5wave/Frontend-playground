import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Accordian from './components/accordian'
import RandomColor from "./components/randomColor"
import StarRating from './components/starRating'
import Home from "./components/home";
import ImageSlider from './components/imageSlider'
import InfiniteScroll from './components/infiniteScroll'
import FolderTreeView from './components/folderTreeView'
import ToggleTheme from './components/toggleTheme'
import ScrollIndicator from './components/scrollIndicator'
import SearchAutocomplete from './components/searchAutocomplete'
import TicTacToe from './components/ticTacToe'
import Modal from './components/modalWithOutsideClick/'
import ScrollTOSection from "./components/scrollToSection"
import WeatherAPP from "./components/weatherAPP"
import ExpenseTracker from "./components/expenceTracker"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='accordian' element={<Accordian/>} />
        <Route path='randomColor' element={<RandomColor/>} />
        <Route path='starRating' element={<StarRating/>} />
        <Route path='imageSlider' element={<ImageSlider/>} />
        <Route path='infiniteScroll' element={<InfiniteScroll/>} />
        <Route path='folderTreeView' element={<FolderTreeView/>} />
        <Route path='toggleTheme' element={<ToggleTheme/>} />
        <Route path='scrollIndicator' element={<ScrollIndicator/>} />
        <Route path='searchAutocomplete' element={<SearchAutocomplete/>} />
        <Route path='ticTacToe' element={<TicTacToe/>} />
        <Route path='modal' element={<Modal/>} />
        <Route path='scrollToSection' element={<ScrollTOSection/>} />
        <Route path='weather' element={<WeatherAPP/>} />
        <Route path='expenceTracker' element={<ExpenseTracker/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App