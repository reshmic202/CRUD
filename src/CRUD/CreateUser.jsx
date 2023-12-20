import axios from "axios"

import { useState } from "react"
import style from "./home.module.css"
import { useNavigate } from "react-router-dom"

const CreateUser = ()=>{

    let[name,setName]=useState("")
    let[sal,setSal]=useState("")
    let[company,setCompany]=useState("")
    let navigate=useNavigate()

    let nameData = (e)=>{
        setName(e.target.value)
    }

    let salData = (e)=>{
        setSal(e.target.value)
    }

    let companyData = (e)=>{
        setCompany(e.target.value)
    }

    let form =(e)=>{
        e.preventDefault()
        
        let payload={
            empName:name,
            empSalary:sal,
            empCompany:company
        }
        axios.post("http://localhost:3000/employees",payload)
        .then(()=>{console.log("Data sent");})
        .catch(()=>{console.log("error");})

        navigate("/user")
    }

    return(
        <section id={style.body}>
            <form action="">
                <label htmlFor="">NAME</label>
                <input type="text"  value={name} onChange={nameData} />  

                <label htmlFor="">SALARY</label>
                <input type="text" value={sal} onChange={salData} />

                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={companyData}/>

                <button onClick={form}>submit</button>

            </form>
        </section>
    )
}

export default CreateUser