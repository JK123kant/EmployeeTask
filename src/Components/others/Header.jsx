
//  import { useState} from "react"
import PropTypes from 'prop-types';

const Header = (props) => {
//   const [username, setusername] = useState('')

//  if ( !props) {
//       setusername('Admin')
//     } else {
//       setusername(props.firstName)
//     }


  const logout = () => {
    localStorage.setItem('loggedinUser', '')
    props.changeUser('')
  }

  return (
    <div className='font-medium text-2xl flex items-end justify-between'>
      <h1>Hello <br /><span className='text-3xl font-semibold'>username</span></h1>
      <button onClick={logout} className='bg-red-600 font-medium text-white px-3 py-2 rounded-md'>LogOut</button>
    </div>
  )
}



Header.propTypes = {
  changeUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
};

export default Header;

