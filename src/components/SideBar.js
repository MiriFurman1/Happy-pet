import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"

export default function SideBar({ setAnimalType, token, handleLogout }) {
    const currentUser = useAuth()

    function homeClickHandle() {
        setAnimalType("")
    }
    return (


        <Menu >
            <div className='hamburger-menu'>
                <div className="menu-item">
                    <Link to='/' onClick={homeClickHandle}>Home</Link>
                </div>

                <div className="menu-item">
                    <Link to='/about' className="menu-item">About</Link>
                </div>

                <div>
                    <Link to="/search" state={{ token }}>Search</Link>
                </div>

                {currentUser.currentUser !== null ?
                    (<div> 
                    <div><Link to='/adoption-requests' state={{ token }}>Adoption Requests</Link></div>
                        <div> <Link to="/update-profile">Update profile</Link> </div>
                        <div><a onClick={handleLogout} href="/">Logout</a> </div>
                        <div>{currentUser.currentUser.email} </div>
                        
                    </div>
                    ) : (
                        <div>
                            <div className="menu-item">
                                <Link to='login/'>Login</Link>
                            </div>
                            <div className="menu-item">
                                <Link to='signup/'>Sign up</Link>
                            </div>
                        </div>
                    )}



            </div>

        </Menu>
    );
};