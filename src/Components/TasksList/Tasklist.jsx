import Accepttask from "./AcceptTask"
import Completetask from "./Completetask"
import Failedtask from "./failedtask"
import Newtask from "./Newtask"
import PropTypes from 'prop-types'

const Tasklist = ({data}) => {
  return (
    <div id="tasklist" className=' h-[50%] w-full overflow-x-auto flex justify-start flex-nowrap gap-5 items-center py-3 px-1 mt-10 '>
      {data.tasks.map((elem ,idx)=>{ //tasks ko map kia h
        if(elem.active)
        {
          return <Accepttask key={idx} data={elem}/>
        }
        if(elem.newtask)
          {
            return <Newtask key={idx} data={elem}/>
          }
          if(elem.completed)
            {
              return <Completetask key={idx} data={elem}/>
            }
            if(elem.failed)
              {
                return <Failedtask key={idx} data={elem}/>
              }
      })}
        
    </div>
  )
}
Tasklist.propTypes = {
  data: PropTypes.shape({
    tasks: PropTypes.arrayOf(PropTypes.shape({
      active: PropTypes.bool,
      newtask: PropTypes.bool,
      completed: PropTypes.bool,
      failed: PropTypes.bool,
    })).isRequired,
  }).isRequired,
};

export default Tasklist
