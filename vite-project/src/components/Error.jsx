import { useRouteError } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
function Error(){
    const err = useRouteError();
    console.log(err);
    
    return(
    <>
        <div className="book-card">
            
            <h1 className="err1">{err.data}</h1>
            <h3 className="err2">{err.status} {err.statusText} </h3>
          
          
            
        </div>
        <Link to="/">
           <button className="a2">Back to Home</button>
        </Link>
    </>
    )
}
export default Error;