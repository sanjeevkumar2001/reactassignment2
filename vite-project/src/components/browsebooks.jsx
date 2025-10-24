import Books from "../utils/mockdata";
import { useState } from "react";
import Science from "./science";
import Fiction from "./fiction";
import Nonfiction from "./Nonfiction";
import { Link } from "react-router-dom";
import "./style.css";
<style className="css"></style>
function Browse(){
     const[science,setscience] = useState(false);
    const[fiction,setfiction] = useState(false);
    const[nonfiction,setnonfiction] = useState(false);
  
     function handle1(){
         setscience(!science);
         setfiction(false);
         setnonfiction(false);
     }
    function handle2(){
        setfiction(!fiction);
        setscience(false);
        setnonfiction(false);
    }
     function handle3(){
        setnonfiction(!nonfiction);
        setscience(false);
        setfiction(false);
     }
    return(
        <>
        <div className="buttoncolor">
             <Link to="/book/science">
            <button onClick={handle1}> click here to view Science Books</button>
         </Link>
        
        <Link to="/book/fiction">
            <button onClick={handle2}> click here to view Fiction Books</button>
         </Link>
         
         <Link to="/book/nonfiction">
            <button onClick={handle3}>click here to view NonFiction Books</button>
         </Link>
        

        </div>
        

        
              {science ? 
            <Science ></Science> : "" }
           
        
       
         
        
          {fiction? <Fiction ></Fiction>: ""}
          {nonfiction ? <Nonfiction ></Nonfiction>: ""} 
          
          
        
        </>
    )
}
export default Browse;