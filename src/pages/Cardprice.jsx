import React, { useContext, useState } from 'react'
import { MyContext } from '../context/Mycontext'

export const Cardprice = ({item}) => {
    const [numbers, setnumbers] = useState(0)
   
    const [Users, setUsers] = useContext(MyContext)
  return (
    <div>
     <> 
          <div className='col-sm-2 mx-2 my-5'  key={item.id}>
            <img src={item.image} alt="" className='w-100 img-fluid' />
            
            <h5 className='mx-4 bg-info text-danger my-3 '>{item.price}$</h5>

            </div>

        </>
    </div>
  )
}

export default Cardprice