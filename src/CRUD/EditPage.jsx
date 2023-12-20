import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditPage = () => {
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let obj=useParams()
    console.log(obj);
    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${obj.id}`)
        .then((response)=>{
            setName(response.data.empName)
            setSalary(response.data.empSalary)
            setCompany(response.data.empCompany)
        })
        .catch(()=>{console.log("Error");})
    },[])

    let getName=((e)=>{
        setName(e.target.value)
    })
    let getSalary=((e)=>{
        setSalary(e.target.value)
    })
    
    let getCompany=((e)=>{
        setCompany(e.target.value)
    })

    let formHandle=()=>{
        let payload={
            empName:name,
            empSalary:salary,
            empCompany:company
        }
        axios.put(`http://localhost:3000/employees/${obj.id}`,payload)
        .then(()=>{console.log("DATA Update");})
        .catch(()=>{console.log("error");})

    }


  return (
    <section id={style.body }>
        <form action="">
        <h1>EDIT PAGE</h1>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={getName} />
            <label htmlFor="">Salary</label>
            <input type="text" value={salary} onChange={getSalary}/>
            <label htmlFor="">Company</label>
            <input type="text" value={company} onChange={getCompany}/>
            <button onClick={formHandle}>UPDATE</button>
        </form>
    </section>
    
  )
}

export default EditPage