import { useContext, useEffect,useState } from 'react'
import Login from './Components/Auth/Login'
import Admindashboard from './Components/Dashboard/Admindashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import  AuthContext  from './AuthContext'


const App = () => {

const [user, setUser] = useState(null)

const [LoggedInUserData, setLoggedInUserData] = useState(null)



const [userData]= useContext(AuthContext)  

useEffect(() => {
  const loggedinUser=localStorage.getItem('loggedinUser')
  if(loggedinUser){
    const userData=JSON.parse(loggedinUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }
}, [])

const handelLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123')
      {
        setUser('admin')
        localStorage.setItem('loggedinUser',JSON.stringify({role:'admin'}))
      }
    else if(userData)
      {
        const employee= userData.find((e)=> email==e.email && e.password==password) //auth data  me employees array se email and password match krega
        if(employee)
          {
            setUser('employee')
            setLoggedInUserData(employee)
            localStorage.setItem('loggedinUser',JSON.stringify({role:'employee',data:employee}))
         }
       }
    else{
      alert('Invalid Email or Password')
    }
   }

  return (
    <>
    
   {!user ? <Login  handelLogin={handelLogin}/> : ''} 

   {user =='admin' ? <Admindashboard changeUser={setUser}/> :(user == 'employee'? <EmployeeDashboard changeUser={setUser} data={LoggedInUserData}/> :null)}
     </>
  )
}

export default App