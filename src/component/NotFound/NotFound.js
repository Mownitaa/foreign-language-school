import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="container d-flex  justify-content-center lh-lg">
            <div className="text-center w-50 p-5 m-5">
                <h1 className="fw-bolder text-danger error">404</h1>
                <h4>Page Not Found</h4>
                <p className="lh-sm py-2">We couldn't find the page you are searching for.This page might have been removed or its name have been changed </p>
                <button className="m-3"> <NavLink className="text-decoration-none text-dark border border-none border-danger rounded fw-bolder p-3" to="/home">HOMEPAGE</NavLink> </button>
                <h3 className="mt-2">
                    <small>
                        <i className="fab fa-twitter-square me-3 "></i>
                        <i className="fab fa-facebook-square me-3 "></i>
                        <i className="fab fa-linkedin me-3 "></i>
                        <i className="fab fa-youtube-square"></i>
                    </small>
                </h3>
            </div>
        </div>
    );
};

export default NotFound;