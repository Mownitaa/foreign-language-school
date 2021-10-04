import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <div>
                <h1 className="text-warning fw-bold mb-2">Most Popular Courses</h1>
            </div>
            <div className="services-container d-flex mb-5 pb-5">
                {
                    services.slice(0, 4).map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;