import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Opps</h2>
            <p>Look's like you are lost</p>
            <Link to="/">Return home...</Link>
        </div>
     );
}
 
export default NotFound;