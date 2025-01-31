import PropTypes from 'prop-types';

const Tasklistnumber = ({ data }) => {
  return (
    <div className='flex screen mt-10 justify-between gap-5 '>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-purple-400'>
        <h2 className="text-3xl font-semibold bg-transparent">{data.taskStats.newtask}</h2>
        <h3 className="text-xl font-medium bg-transparent">New Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-orange-400'>
        <h2 className="text-3xl font-semibold bg-transparent">{data.taskStats.active}</h2>
        <h3 className="text-xl font-medium bg-transparent">Active Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
        <h2 className="text-3xl font-semibold bg-transparent">{data.taskStats.failed}</h2>
        <h3 className="text-xl font-medium bg-transparent">Failed Task</h3>
      </div>
      <div className='rounded-xl w-[45%] py-6 px-9 bg-pink-400'>
        <h2 className="text-3xl font-semibold bg-transparent">{data.taskStats.completed}</h2>
        <h3 className="text-xl font-medium bg-transparent">Completed Task</h3>
      </div>
    </div>
  );
};

Tasklistnumber.propTypes = {
  data: PropTypes.shape({
    taskStats: PropTypes.shape({
      newtask: PropTypes.number.isRequired,
      active: PropTypes.number.isRequired,
      failed: PropTypes.number.isRequired,
      completed: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Tasklistnumber;