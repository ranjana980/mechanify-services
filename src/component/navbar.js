import { Link, useLocation, } from 'react-router-dom';
import logo from '../assests/images/logo.png'
import { navItems } from '../utils/constant'
import { useState } from 'react';

const Navbar = () => {
    const { pathname } = useLocation()
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-column ">
            <div className="container ">
                <div className='mobile-view '>
                    <img className="align-self-center" src={logo} height={50} width={200} alt="logo" />
                    <button onClick={handleClick} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className={`align-self-end cotainer font-weight-bold mb-2 ${menu ? '' : 'nanItems'}`}>
                    {navItems.map(({ title, route }) => (
                        <Link key={title} className={`btn btn-light ml-3 ${pathname === route ? 'active' : ''}`} to={route} role="button">{title}</Link>
                    ))}
                </div>

            </div>
        </nav>
    )
}
export default Navbar;