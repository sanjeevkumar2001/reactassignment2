
import './style.css'
import Books from '../utils/mockdata';
import{Link} from "react-router-dom";
import Browse from './browsebooks';
import Book from './books';
import { useState } from 'react';

import appStore from '../utils/appStore';


function Header(){
    
    return(
        <>
          <div className='b1'>

             <img src="https://cdn-icons-png.flaticon.com/128/3330/3330314.png"></img>
             <h1 className='a1'>  Online library system  for science, fiction and non-science fiction books</h1>
            <ul className='c1' >
              <Link to ='/'>
                   <li><button >Home</button></li>
              </Link>
                  <Link to ='/browse'>
                   <li><button >Browse Books</button></li>
              </Link>
              <Link to ='/addbook'>
                   <li> <button >AddBook</button></li>
              </Link>
                 
                  
            </ul>
          
                

          </div>
          
             
            
         

      
      


   
        
               
     
        
          
           
        
         
          

           
        </>
    )
}
export default Header;
