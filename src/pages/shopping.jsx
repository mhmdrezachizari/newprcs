import React, { useContext } from 'react'
import { MyContext } from '../context/Mycontext'
import 'bootstrap/dist/css/bootstrap.min.css';

const shopping = () => {
  const [Users, setUsers] = useContext(MyContext)


  const increaseHandler = () =>{
    console.log(Users);
  }
  return (
    <>
  <div className='container'>
    <div className='row'>
    {
      Users.map(item=>{
        return( <> 
          <div className='col-sm-2 mx-2 my-5'  key={item.id}>
            <img src={item.image} key={item.id} alt="" className='w-100' />
            <a className='btn btn-primary' onClick={increaseHandler}>+</a>
            <label>{item.num}</label>
            <a className='btn btn-primary'>-</a>
            </div>

         
        
        
        </>) 
      })
    }
   </div> </div></>
  )
}

export default shopping