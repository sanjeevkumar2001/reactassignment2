import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Browse from './components/browsebooks.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AddBook from './components/addbook.jsx'
import Science from './components/science.jsx'
import Fiction from './components/fiction.jsx'
import Nonfiction from './components/Nonfiction.jsx'
import Book from './components/books.jsx'
import BookDetails from './components/bookdetails.jsx'
import BookList from './components/BookList.jsx';
import Error from './components/Error.jsx'
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<Error></Error>,
    
    children:[
      {
        path:"/",
        element: <BookList></BookList>
      },
     {
      
      path:"/browse",
      element:<Browse></Browse>
    },
  {
    path:"/addbook",
    element:<AddBook></AddBook>
  },{
    path:"/book/science",
    element:<Science></Science>
  },{
    path:"/book/fiction",
    element:<Fiction></Fiction>
  },{
    path:"/book/nonfiction",
    element:<Nonfiction></Nonfiction>
  },{
    path:"/book/:id",
    element:<BookDetails></BookDetails>
  }]
  },
  
  
])
createRoot(document.getElementById('root')).render(
 <StrictMode>
     <RouterProvider router={appRouter}></RouterProvider>
 </StrictMode>

  
    
)
