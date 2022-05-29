import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SidebarData } from '../SideBar/sideBarData.js'
import './navbar.css'
import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons/ai';



const NavBar = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
    <IconContext.Provider value={{color:'fff'}}>
      <div className='navbar'>
        <Link to='/' className='menubars'>
        <FaBars onClick={showSidebar}/>
        </Link>
    
    </div>

    <nav className={sidebar ? 'nav-menu active' :'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navar-toggle'>
          <Link to="/" className='menu-bars'>
            <AiIcons.AiOutlineClose/>
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    </IconContext.Provider>
      
    </div>
  );
}

export default NavBar


