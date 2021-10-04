import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="d-flex bg-dark text-white  align-items-center justify-content-between py-3 px-5">
                <div>
                    <h4 className="text-warning"> <span className="fs-5"><i className="fas fa-language"></i></span> Foreign Language School  <span className="fs-5"><i className="fas fa-language fa-flip-horizontal"></i></span></h4>
                </div>
                <nav>
                    <NavLink className="text-decoration-none text-white fw-bold fs-5 px-3" to="/home">Home</NavLink>
                    <NavLink className="text-decoration-none text-white fw-bold fs-5 px-3" to="/about">About</NavLink>
                    <NavLink className="text-decoration-none text-white fw-bold fs-5 px-3" to="/services">Services</NavLink>
                    <NavLink className="text-decoration-none text-white fw-bold fs-5 px-3" to="/Teachers">Teachers</NavLink>
                    <i className="fas fa-sign-in-alt text-warning px-4 fs-4"></i>
                </nav>
            </div>
        </div>
    );
};

export default Header;