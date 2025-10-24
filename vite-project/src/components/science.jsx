import Books from "../utils/mockdata"
import Browse from "./browsebooks";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css"
import { useSelector } from "react-redux";
function Science(){
     const scienceFilteredBooks = [];
     const books = useSelector(state => state.book.items);
     
     const[searchText,setsearchText] = useState("");
     const[filteredbooks,setfilteredbooks] = useState(scienceFilteredBooks);
     function handleClick1(){
   
        console.log(scienceFilteredBooks);
           const scifilter = scienceFilteredBooks.filter(book =>
           book.title.toLowerCase().includes(searchText.toLowerCase())
        );

        console.log(scifilter);
        setfilteredbooks(scifilter);
       
        
         
     }
    return(
        <>
         {   books.filter(book => {
            if (book.genre === "Science"){
                scienceFilteredBooks.push(book);

                
                 
                
            }
            

        })}
        
       
        <h1>Science Books</h1>
        <div className="filter">
                <input type="text" onChange={(e) =>setsearchText(e.target.value) } />
                <button onClick={handleClick1}>Filter Books by Title</button>
          </div>
        <div className="book-list">
        
        
           {
           
            filteredbooks.map (book =>{
            
                
               
                 
                return(
                    <>
                     
                      <div className="book-card"> 
                    
                     <img src={book.image} width="200px" height="200px" className="book-cover"></img>
                 
                    <div className="book-details">
                        <h2 className="book-title">{book.title}</h2>
                        <p className="book-author">{book.author}</p>
                        <Link to = {`/book/${book.id}`}>
                            <button className="a2">View More Details of the Book</button>
                        </Link>
                        

                </div>
                    
                    

                </div>

                    </>
                )
                
            }
            
            )
        }
           
        
     </div>
     </>

    )
   
}
export default Science;