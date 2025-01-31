// import React from 'react'
import PropTypes from 'prop-types';

const AcceptTask = ({data}) => {
  return (
    <div className='h-full w-[300px] bg-orange-400 rounded-2xl p-5 flex-shrink-0'>
            <div className="flex justify-between items-center bg-transparent">
            <h3 className="bg-red-600 px-3 py-1 rounded font-bold">{data.taskCategory}</h3>
            <h4 className="bg-transparent font-bold">{data.taskDate}</h4>
      </div>
      <h3 className="mt-4 text-xl bg-transparent font-bold">{data.taskTitle}</h3>
      <p className="text-sm mt-2">{data.taskDescription} </p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm rounded-md'>Mark As Completed</button>
        <button className='bg-red-500 py-1 px-2 text-sm rounded-md'>Mark As Failed</button>

      </div>

        </div>
  )
}
AcceptTask.propTypes = {
  data: PropTypes.shape({
    taskCategory: PropTypes.string.isRequired,
    taskDate: PropTypes.string.isRequired,
    taskTitle: PropTypes.string.isRequired,
    taskDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default AcceptTask
