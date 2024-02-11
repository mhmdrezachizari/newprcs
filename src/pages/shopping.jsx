import React, { useContext, useState } from 'react'
import { MyContext } from '../context/Mycontext'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from './Card'


const shopping = () => {
  const [Users, setUsers] = useContext(MyContext)
  const [numbers, setnumbers] = useState(0)
  return (
    <>
  <div className='container'>
    <div className='row'>
    {
      Users.map(item=>{
        return <Card item={item} key={item.id}/>
      })
    }
   </div> </div></>
  )
}

export default shopping