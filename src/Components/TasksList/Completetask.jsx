//import React from 'react'
import PropTypes from 'prop-types';

const Completetask = ({data}) => {
  return (
    <div id="tasklist" className='h-full w-[300px] bg-orange-400 rounded-2xl p-5 flex-shrink-0'>
    <div className="flex justify-between items-center bg-transparent">
    <h3 className="bg-red-300 px-3 py-1 rounded font-bold">{data.taskCategory}</h3>
    <h4 className="bg-transparent font-bold">{data.taskDate}</h4>
</div>
<h3 className="mt-4 text-xl bg-transparent font-bold">{data.taskTitle}</h3>
<p className="text-sm mt-2">{data.taskDescription}
</p>
<div className='mt-2'>
    <button className='w-full bg-orange-500 rounded-md'>Completed</button>
</div>
</div>  )
}
Completetask.propTypes = {
  data: PropTypes.shape({
    taskCategory: PropTypes.string,
    taskDate: PropTypes.string,
    taskTitle: PropTypes.string,
    taskDescription: PropTypes.string,
  }).isRequired,
};

export default Completetask
