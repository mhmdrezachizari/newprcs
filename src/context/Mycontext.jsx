import { createContext, useEffect, useState } from "react";

export const MyContext = createContext()

export const Myprovider = (props)=>{
  const [Users, setUsers] = useState([])
  const [numbers, setnumbers] = useState(0)
const fetchUserData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])
  const increaseHandler = (itemid) =>{
    setnumbers(numbers + 1)
    
    

  }
  const decreaseHandler = (itemid) =>{
    setnumbers(numbers - 1)
    
  }
return(
  <MyContext.Provider value={[Users, setUsers,increaseHandler,decreaseHandler]}>
  {props.children}
  </MyContext.Provider>
)
}
