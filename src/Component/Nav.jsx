import style from "./navcss.module.css"
import { Link } from "react-router-dom";
const Nav =()=>{ 
    return(
        <div id={style.main}>  
            <Link to="/">CREATE-USERS</Link>
            <Link to="/users">USERS</Link>
           </div>
    )
}
export default Nav