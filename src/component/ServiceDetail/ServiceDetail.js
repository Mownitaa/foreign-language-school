import React from 'react';
import './ServiceDetail.css'
const ServiceDetail = (props) => {
    const { name, img, description, time, months, modules } = props.serviceDetail;
    return (
        <div>

            <div className="card-deck">
                <div className="card mb-5 mx-2">
                    <img className="images card-img-top" src={img} alt="" />
                    <div className="card-body mt-3">
                        <h5 className="card-title  fw-bold">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{time} Hours {months} Months {modules} Modules</small>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ServiceDetail;