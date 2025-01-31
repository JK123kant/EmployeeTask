//import React from 'react'
import AllTask from '../others/AllTask'
import CreatedTask from '../others/CreatedTask'
import Header from '../others/Header'
import PropTypes from 'prop-types'

const Admindashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
        <Header changeUser={props.changeUser}/>
        <CreatedTask/>
        <AllTask/>
    </div>
  )
}
Admindashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
}

export default Admindashboard
