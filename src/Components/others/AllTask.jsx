//import React from 'react'

import { useContext } from "react"
import AuthContext from "../../AuthContext"



const AllTask = () => {
  
  const [userData]=useContext(AuthContext)
  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded'>
        <div className='bg-red-400 py-2 px-4 flex justify-between mb-2 rounded'>
                <h2 className="w-1/5">Employee Name</h2>
                <h3 className="w-1/5">New Task</h3>
                <h5 className="w-1/5">Active Task</h5>
                <h5 className="w-1/5">Completed</h5>
                <h5 className="w-1/5">Failed</h5>
        </div>
        <div className="">
           {userData.map(function(elem,idx){
                return <div key={idx} className="border-emerald-300 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2 className="w-1/5">{elem.firstName}</h2>
                    <h3 className="w-1/5 text-blue-400">{elem.taskStats.newtask}</h3>
                    <h5 className="w-1/5 text-yellow-400">{elem.taskStats.active}</h5>
                    <h5 className="w-1/5 text-green-400">{elem.taskStats.completed}</h5>
                    <h5 className="w-1/5 text-red-400">{elem.taskStats.failed}</h5>
                </div>
                
           })}     
        </div>
        
    </div>
  )
}
export default AllTask