import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, university, img } = props.service
    return (
        <div className="d-flex">
            <div className="container course-container">
                <img className="img-fluid" src={img} alt="" />
                <div className="mt-5">
                    <h4 className="card-title">{name}</h4>
                    <p>{university}</p>
                    <h5><small>Course</small></h5>
                </div>
            </div>

        </div>
    );
};

export default Service;