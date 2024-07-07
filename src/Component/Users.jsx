// // import React, { useEffect } from 'react'
// import style from "./navcss.module.css"
// // import axios from 'axios'
// const Users=()=> {
//   return (
//     <div id={style.users}>
//       <h1>USERS</h1>
//     </div>
//   )
// }

// export default Users


import React, { useEffect, useState } from 'react'
import style from "./navcss.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users = () => {
  let [res,setres]=useState([])
  let deleteData=(x)=>{
    axios.delete(`http://localhost:3000/employees/${x}`)
    window.location.assign("/users")
  }

  useEffect(()=>{
    axios.get("http://localhost:3000/employees")
    .then((response)=>{
      console.log(response.data);
      setres(response.data)
      console.log("got it");
    })
    .catch(()=>{
      console.log("not get");
    })
  },[])
  
  return (
    <div id={style.for}>
     {
      res.map((x)=>{
       return(
        <div key={x.id} className={style.formm}>
          <table>
            <tr>
              <th colSpan={2}>Employee : {x.id}</th>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{x.ename}</td>
            </tr>
            <tr>
              <td>Salary:</td>
              <td>{x.esalary}</td>
            </tr>
            <tr>
              <td>Company:</td>
            <td>{x.ecompany}</td>
            </tr>
            <tr>
              <td><button><Link to={`/edit/${x.id}`}className={style.a} >Edit</Link></button></td>
              <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
            </tr>
          </table>
          </div>
       )
        
      })
     }
    </div>
  )
}

export default Users