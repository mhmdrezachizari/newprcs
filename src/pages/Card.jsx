import React, { useContext, useState } from 'react'
import { MyContext } from '../context/Mycontext'

export const Card = ({item}) => {
    const [numbers, setnumbers] = useState(0)
   
    const [Users, setUsers] = useContext(MyContext)



    const increaseHandler = () =>{
        setnumbers(numbers + 1)
        setUsers([...Users , {num:{numbers}}])
        console.log(Users);

      }
      const decreaseHandler = () => {
        if (numbers>0){
        setnumbers(numbers-1)
        setUsers([...Users , {num:{numbers}}])
        console.log(Users[0]);
      }}

  return (
    <div>
     <> 
          <div className='col-sm-2 mx-2 my-5'  key={item.id}>
            <img src={item.image} alt="" className='w-100 img-fluid' />
            <a className='btn btn-primary' onClick={increaseHandler} >+</a>
            <label className='mx-4'>{numbers}</label>
            <a className='btn btn-primary'onClick={decreaseHandler} >-</a>
            </div>

        </>
    </div>
  )
}
