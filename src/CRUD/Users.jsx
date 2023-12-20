import style from "./home.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Users = ()=>{
    let[content,setContent]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3000/employees")
      .then((response)=>{setContent(response.data);})
      .catch(()=>{console.log("Error");})
  },[]) 
  return (
   <div id={style.user}>
    {content.map((x)=>{
        return(
            <div >
                <table >
                    <tr>
                        <th colSpan="2">EMPLOYEE {x.id}</th>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>:{x.empName}</td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td>:{x.empSalary}</td>
                    </tr>
                    <tr>
                        <td>Company</td>
                        <td>:{x.empCompany}</td>
                    </tr>

                    <tr>
                        <td><button>SUBMIT</button></td>
                        <td><button><Link to = {`/edit/${x.id}`}>Edit</Link></button></td>
                    </tr>
                </table>
            </div>
        )
    })}
   
           
            
          
   </div>
  )
}

export default Users

