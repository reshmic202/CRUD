import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Home from "./CRUD/Home"
import CreateUser from "./CRUD/CreateUser"
import Users from "./CRUD/Users"
import EditPage from "./CRUD/EditPage"

const App =()=>{
    return(
        <div>
            <BrowserRouter>
                <Home/>
                {/* <CreateUser/> */}
                <Routes>
                    <Route element={<CreateUser/>} path="/"/>
                    <Route element={<Users/>} path="/user"/>
                    <Route element={<EditPage/>} path="/edit/:id"/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App