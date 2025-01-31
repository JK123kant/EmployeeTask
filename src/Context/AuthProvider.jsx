// import React from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import AuthContext from '../AuthContext'

import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'


const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
      setLocalStorage()
      const {employees}=getLocalStorage()
      setUserData(employees)
    }, [])

  return (
        <AuthContext.Provider value={[userData,setUserData]}>
        {children}
        </AuthContext.Provider>
   
  )
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider

