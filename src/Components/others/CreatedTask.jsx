import { useContext, useState } from 'react'
import AuthContext from '../../AuthContext'
//import AuthProvider from '../../AuthProvider'
const CreatedTask = () => {
  const [userData,setUserData]=useContext(AuthContext)

    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [taskCategory, setcategory] = useState('')

    const [newtask, setnewtask] = useState({})

  const submithandler=(e)=>{
    e.preventDefault()
    
    setnewtask({taskDescription,taskTitle,taskDate,assignTo,taskCategory,active:false,newtask:true,completed:false,failed:false})
    
    const data=userData

    data.forEach(function (elem) {
       if(assignTo==elem.firstName)
      {
       elem.tasks.push(newtask)
       
      }
    })
    console.log(data);
    
    setUserData(data)

    settaskTitle('')
    setassignTo('')
    setcategory('')
    settaskDate('')
    settaskDescription('')

  }
  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
     <form onSubmit={(e)=>{
      submithandler(e)
    }} 
    className='flex flex-wrap w-full items-start justify-between' name="apna form">
        <div className='w-1/2'>
             <div>
                  <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                 <input value={taskTitle}
                  onChange={(e)=>{
                    settaskTitle(e.target.value)
                  }} name="title"
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make A Design'/>
             </div>
             <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input value={taskDate}
                  onChange={(e)=>{
                    settaskDate(e.target.value)
                  }} name="date"
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date'/>
            </div>
             <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                  <input  value={assignTo}
                  onChange={(e)=>{
                    setassignTo(e.target.value)
                  }} name="username"
                   className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='employee name'/>
             </div>
            <div>
                  <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                  <input  value={taskCategory}
                  onChange={(e)=>{
                    setcategory(e.target.value)
                  }} name="category"

                   className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design ,dev ,etc' />
            </div>

        </div>

        <div className='w-1/2 flex flex-col items-start'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
             <textarea value={taskDescription}
                  onChange={(e)=>{
                    settaskDescription(e.target.value)
                  }} name="description"
             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' cols='30' rows='10'></textarea>
             <button className='bg-green-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Created</button>
        </div>
          
      </form>
</div>
  )
}

export default CreatedTask