import { useState } from "react"
import PropTypes from 'prop-types'




const Login = ({handelLogin}) => {
const [email, setemail] = useState('')
const [password, setpassword] = useState('')

    const SubmitHandler=(e)=>{
        e.preventDefault()
        handelLogin(email,password)
        // console.log("Email is " ,email)
        // console.log("Password is ",password)
        setemail(" ")
        setpassword(" ")
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
    <div className="border-2 border-red-700 p-20 rounded-xl">

        <form  onSubmit={(e)=>{
            SubmitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
          <input value={email}
           onChange={(e)=>{
            setemail(e.target.value)
           }}
           required type="email"  name="email" placeholder="Enter Email" className=" placeholder:text-white text-white outline-none bg-transparent border-2 border-b-slate-400 rounded-full py-2 px-2" />
          <input value={password}
          onChange={(e)=>{
            setpassword(e.target.value)
          }}
          required type="password" name="password" placeholder="Password" className="placeholder:text-white text-white mt-2 outline-none bg-transparent border-2 border-b-slate-400 rounded-full py-2 px-2"/>
          <button className="text-white outline-none  bg-orange-500 border-2 mt-2 border-b-red-50 w-20 rounded-full">Log In</button>
        </form>
    </div>
  
</div>
  )
}
Login.propTypes = {
  handelLogin: PropTypes.func.isRequired,
}

export default Login