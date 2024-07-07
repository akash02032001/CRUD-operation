import React from 'react'
import style from "./navcss.module.css"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Create=()=> {
  let[name,setname]=useState("")
  let[salary,setsalary]=useState("")
  let[company,setcompany]=useState("")

let navigate=useNavigate("http://localhost:3000/employees")

  let namedata=(e)=>{
    setname(e.target.value)
  }
  let salarydata=(e)=>{
    setsalary(e.target.value)
  }
  let companydata=(e)=>{
    setcompany(e.target.value)
  }
  
  let formhandle=(e)=>{
    e.preventDefault()
    let payload={
      ename:name,
      esalary:salary,
      ecompany:company
    }
    axios.post("http://localhost:3000/employees",payload)
  .then((response)=>{console.log(response.data);})
  .catch(()=>{console.log("errorrr");})
  navigate("/users")

  }
  return (
    <div id={style.form}>
      <form action="" className={style.form}>
        <label htmlFor="">NAME</label> 
        <input type="text" value={name} onChange={namedata}/><br />
        <label htmlFor="">SALARY</label>
        <input type="text" value={salary} onChange={salarydata}/><br />
        <label htmlFor="">COMPANY</label>
        <input type="text" value={company} onChange={companydata}/><br />
        <button onClick={formhandle}>SUBMIT</button>
      </form>
    </div>
  )
}

export default Create