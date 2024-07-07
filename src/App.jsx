import Create from "./Component/Create"
import Nav from "./Component/Nav"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Users from "./Component/Users"
import Edituser from "./Component/Edituser"
const App =()=>{
    return(
        <div>   
          <BrowserRouter>
          <Nav/>
          <Routes>
            <Route element={<Create/>} path='/'/>
            <Route element={<Users/>} path='/users' />
            <Route element={<Edituser/>} path='/edit/:abc' />
          </Routes>
          </BrowserRouter>
        </div>
    )
}
export default App