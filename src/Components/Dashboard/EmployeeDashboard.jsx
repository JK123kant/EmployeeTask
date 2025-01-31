// import { getLocalStorage } from "../../Utils/LocalStorage"
import Header from "../others/Header"
import Tasklistnumber from "../others/Tasklistnumber"
import Tasklist from "../TasksList/Tasklist"
import PropTypes from 'prop-types';
// import React from "react"
  

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1f1e1e] h-screen">
    <Header changeUser={props.changeUser} data={props.data}/>
    <Tasklistnumber data={props.data}/>
    <Tasklist data={props.data}/>
    </div>
  )
}
EmployeeDashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default EmployeeDashboard
