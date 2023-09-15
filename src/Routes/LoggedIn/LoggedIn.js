import './LoggedIn.css'
import ToDo from '../../Components/ToDo'
import InProgress from '../../Components/InProgress'
import Completed from '../../Components/Completed'
import { Link } from 'react-router-dom';

const LoggedIn = () => {

    return(
      <>
        <Link to="/">Sign Out</Link>
        <ul className='mainscreen'>  
          <li><ToDo/></li>
          <li><InProgress/></li>
          <li><Completed/></li>  
        </ul>
      </>
    )
}

export default LoggedIn;
