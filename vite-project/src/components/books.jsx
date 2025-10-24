import Books from "../utils/mockdata";
import "./style.css";
import { Link } from "react-router-dom";
import BookDetails from "./bookdetails";
import Header from "./header";
import { useState } from "react";


function Book(props){
 




  return(
   
    
    
      

       <div className="book-card">
         <img src={props.data.image} width="200px" height="200px" className="book-cover"></img>
      <div className="book-details">
        <h2 className="book-title">{props.data.title}</h2>
       
        <p className="book-description">{props.data.description}</p>
        

      </div>

      </div>
      

       
  
   
  )

  
}
export default Book;