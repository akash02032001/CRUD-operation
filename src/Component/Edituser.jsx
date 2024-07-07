import React, { useEffect, useState } from 'react'
import style from "./navcss.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edituser = () => {
  let [name, setname]=useState("")
  let [Salary,setsalary]=useState("")
  let [company,setcompany]=useState("")
  let navigate=useNavigate("http://localhost:3000/employees")

  let obj =useParams()
console.log(obj);

useEffect(()=>{
  axios.get(`http://localhost:3000/employees/${obj.abc}`)
  .then((response)=>{
   console.log( response.data);
   setname(response.data.ename)
   setsalary(response.data.esalary)
   setcompany(response.data.ecompany)
  })
  .catch(()=>{
   console.log("errrrrrrrrrrrr");
   
  })
 },[])

 let namedata=(e)=>{
  setname(e.target.value)
 }
 let salarydata=(e)=>{
  setsalary(e.target.value)
 }
 let companydata=(e)=>{
  setcompany(e.target.value)
 }
 let submit=(e)=>{
  let payload={
    ename:name,
    esalary:Salary,
    ecompany:company
  }
  axios.put(`http://localhost:3000/employees/${obj.abc}`,payload)
  .catch(()=>{console.log("update");
})
  .then(()=>{console.log("not update");})
  navigate("/users")
 }

  return (
    <div id={style.form}>
      <form action="" id={style.cu1} className={style.form}>
        <h5>UPDATE USER</h5>
        <label htmlFor="">Name </label>
        <input type="text"  value={name} onChange={namedata}/> <br />
        <label htmlFor="">Salary</label>
        <input type="text"  value={Salary} onChange={salarydata}/> <br />
        <label htmlFor="">Company</label>
        <input type="text"  value={company} onChange={companydata}/> <br />
        <button onClick={submit}>Submit</button>

          </form>
    </div>
  )
}

export default Edituser