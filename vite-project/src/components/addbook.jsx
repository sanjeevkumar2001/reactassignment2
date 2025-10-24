import Books from "../utils/mockdata";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./header";
import { addItem } from "../utils/bookSlice";

function AddBookForm(){
    const dispatch = useDispatch();
    
    
    const[book,setbook] = useState({
        id: Books.length + 1,
        title: "",
        author: "",
        genre:  "",
        rating:  "",
        image:    "",
        description:""
    })
   const[error,seterror] = useState({});
   const [success, setSuccess] = useState("");
    
function Validate(){
        const newErrors = {};
        if(!book.title.trim()) newErrors.title = "Title is Required";
        if (!book.author.trim()) newErrors.author = "Author is required";
        if (!book.genre.trim()) newErrors.genre = "Genre is required";
        if(!book.rating){
            newErrors.rating = "Rating is required"
        }
        else if(book.rating < 0 || book.rating > 5) newErrors.rating = "Rating must be  between 0 and 5 ";
        if(!book.image){
            newErrors.image = "Image Url is Required"
        }
        else{
            try{
                new URL(book.image);
            }
            catch{
                newErrors.image = "Valid Image Url is Required";
            }
        }
        if(!book.description.trim()) newErrors.description = "Description is Required";
        return newErrors;
    }

       function handleChange(e){
       const{name,value} = e.target;
       setbook({...book,[name]:value})
    }
    function handleClick(e){
        e.preventDefault();
        const validationErrors = Validate();
       if (Object.keys(validationErrors).length > 0) {
        seterror(validationErrors);
         return;
      }
      

       const newBook = { ...book, id: Date.now() };
       dispatch(addItem(newBook));
      setbook({ title: "", author: "", genre: "", rating: "", image: "", description: "" });
        seterror({});
        setSuccess("Book added successfully!");
    }
     
    return(
        <div >
           <h2> ADD BOOK </h2>
           <form action="">
             <div>
                  <label htmlFor="title"> Enter Title</label>
                  <input type="text" name="title" value={book.title} id="title" onChange={handleChange}  />
                  {error.title ? (<p style={{color: "red"}}> {error.title}</p>):( null)}
             </div>
             <br>
             </br>
             <br>
             </br>
            <div>
                  <label htmlFor="author"> Enter Author</label>
                  <input type="text" name="author" value={book.author} id="author"  onChange={handleChange}/>
                  {error.author ? (<p style={{color: "red"}}> {error.author}</p>):( null)}
             </div>
             <br>
             </br>
             <br>
             </br>
                 <div>
                  <label htmlFor="genre"> Enter Genre</label>
                  <input type="text" name="genre" value={book.genre} id="genre" onChange={handleChange} placeholder="Enter Science or Fiction or Non-Fiction"/>
                  {error.genre ? (<p style={{color: "red"}}> {error.genre}</p>):( null)}
             </div>
             <br>
             </br>
             <br>
             </br>
                 <div>
                  <label htmlFor="rating"> Enter rating</label>
                  <input type="number" name="rating" value={book.rating}  id="rating"  min="0"
                  max="5" step="0.1"onChange={handleChange}/>
                  {error.rating ? (<p style={{color: "red"}}> {error.rating}</p>):( null)}
             </div>
             <br></br>
             <br></br>
                 <div>
                  <label htmlFor="image"> Enter Image Url</label>
                  <input type="text" name="image" value={book.image} id="image" onChange={handleChange} />
                  {error.image ? (<p style={{color: "red"}}> {error.image}</p>):( null)}
             </div>
             <br></br>
             <br></br>
             <div>
                  <label htmlFor="description"> Enter Description</label>
                  <input type="text" name="description" value={book.description} id="description" onChange={handleChange} />
                {error.description? (<p style={{color: "red"}}> {error.description}</p>):( null)}
             </div>
             <br></br>
             <br></br>
             <button type="submit" onClick={handleClick}>ADD Book</button>
           </form>
           
        </div>
    )
}
export default AddBookForm;