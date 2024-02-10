import { createContext, useEffect, useState } from "react";

export const MyContext = createContext()

export const Myprovider = (props)=>{
  const [Users, setUsers] = useState([])
const fetchUserData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers([...data,{title:0}])
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])
return(
  <MyContext.Provider value={[Users, setUsers]}>
  {props.children}
  </MyContext.Provider>
)
}
