import Books from "../utils/mockdata";
import { Link } from "react-router-dom";
import { useState } from "react"; 
import { useSelector } from "react-redux";
function Fiction(){
     const fictionFilteredBooks = [];
     const books = useSelector(state => state.book.items);
     const[searchText,setsearchText] = useState("");
     const[filteredbooks,setfilteredbooks] = useState(fictionFilteredBooks);
     function handleClick1(){
         const ficfilter = fictionFilteredBooks.filter(book =>
           book.title.toLowerCase().includes(searchText.toLowerCase())
        );

        console.log(ficfilter);
        setfilteredbooks(ficfilter);
     }
    return(
        
        <>
         {   books.filter(book => {
            if (book.genre === "Fiction"){
                fictionFilteredBooks.push(book);

                
                 
                
            }
            

        })}
        <h1>Fiction Books</h1>
        <div className="filter">
                <input type="text"  onChange={(e) =>setsearchText(e.target.value) }  />
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
                          <Link to= {`/book/${book.id}`}>
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
export default Fiction;