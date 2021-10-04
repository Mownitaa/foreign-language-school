import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data));
    }, []);
    return (
        <div className="container">
            <div>
                <h1 className="fw-bold text-danger text-center p-5">Service Details</h1>
            </div>
            <div className="serviceDetails">
                {
                    serviceDetails.map(serviceDetail => <ServiceDetail
                        key={serviceDetail.id}
                        serviceDetail={serviceDetail}></ServiceDetail>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;