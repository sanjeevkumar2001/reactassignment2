import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Header from './components/header.jsx'
import Browse from './components/browsebooks.jsx'
import { Outlet } from 'react-router-dom'
import Book from './components/books.jsx'
import BookList from './components/BookList.jsx'
import {Provider} from "react-redux"
import appStore from './utils/appStore.js'
function App() {
  
  return (
    <Provider store={appStore}>
     <Header></Header>   
    
     <Outlet></Outlet>
    </Provider>
  )
}

export default App
