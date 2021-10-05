import React from 'react';
import './ServiceDetail.css'
const ServiceDetail = (props) => {
    const { name, img, description, time, months, modules, cost } = props.serviceDetail;

    return (

        <div className="mb-4">

            <div className="card-deck">
                <div className="card mb-5 mx-2">
                    <img className="images card-img-top" src={img} alt="" />
                    <div className="card-body mt-3">
                        <h5 className="card-title  fw-bold">{name}</h5>
                        <p className="card-text">{description}</p>
                        <button className="border border-dark rounded text-center text-primary fw-bold p-1 me-2">Enroll Now</button> <span className="fs-4 fw-bolder text-warning">${cost}</span>
                    </div>

                    <div className="card-footer">
                        <small className="text-muted">
                            <span className="me-4"><i className="fas fa-clock text-warning"></i> {time} Hours</span>

                            <span className="me-4"> <i className="fas fa-calendar-alt text-primary"></i>
                                {months} Months</span>

                            <span><i className="fab fa-youtube text-danger"></i>
                                {modules} Modules</span>
                        </small>

                    </div>
                </div>

            </div>

        </div>

    );
};

export default ServiceDetail;