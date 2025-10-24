import { Link, useParams } from "react-router-dom";
import Books from "../utils/mockdata";
import "./style.css";
import { useSelector } from "react-redux";
function BookDetails(){
    
    const params = useParams();
    const books = useSelector(state => state.book.items);
    const bookdetail = books.filter(book => book.id == params.id)
    
    return(
        <>
          
          {bookdetail.map(book => {
                 return(
                  <>
                        <div className="book-card"> 

                  
                     <img src={book.image} width="200px" height="200px" className="book-cover"></img>
                 
                    <div className="book-details">
                        
                        <h2 className="book-title">{book.title}</h2>
                        <p className="book-author">{book.author}</p>
                        <p className="book-rating">{book.rating}</p>
                        <p className="book-description">{book.description}</p> 
                        

                </div>
                    
                    

               
                       
                </div>
                <Link to="/browse">
                          <button className="a2">Back to Browse</button>
                </Link>
                  </>
                 )
          })}
        

        
        </>
    )
}
export default BookDetails;