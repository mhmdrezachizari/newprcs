import React, { useContext } from 'react'
import Cardprice from './Cardprice'
import { MyContext } from '../context/Mycontext'

const pricing = () => {
  const [Users , setUsers] = useContext(MyContext)
  return (
    <div>
      {
        Users.map(item=>{
          return <Cardprice item={item}/>
        })
      }

    </div>
  )
}

export default pricing