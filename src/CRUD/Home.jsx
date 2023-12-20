import { Link } from "react-router-dom"

import style from "./home.module.css"
const Home = ()=>{
    return(
        <section id={style.nav}>
            <Link to ="/">CREATE-USER</Link>
            <Link to="/user">USERS</Link>
        </section>
    )
}
export default Home