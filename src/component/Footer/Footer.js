import React from 'react';

const Footer = () => {
    return (
        <div className="mt-3">
            <div className="d-flex bg-dark text-white my-2 py-3 justify-content-center">
                <div className="m-5">
                    <h6>Foreign Language School</h6>
                    <h1>
                        <small>
                            <i className="fab fa-twitter-square me-3 text-warning"></i>
                            <i className="fab fa-facebook-square me-3 text-warning"></i>
                            <i className="fab fa-linkedin me-3 text-warning"></i>
                            <i className="fab fa-youtube-square text-warning"></i>
                        </small>
                    </h1>
                </div>
                <div className="mx-5">
                    <h5 className="pb-2">Branch Locations</h5>
                    <p>Road 11,Banani</p>
                    <p>Sector-9,Uttara</p>
                    <p>Mirpur-2</p>
                    <p>Rankin Street,Wari</p>
                </div>
                <div className="mx-5">
                    <h5 className="pb-2">Support</h5>
                    <p>Contact us</p>
                    <p>FAQ</p>
                    <p>Careers</p>
                    <p>Certificates</p>
                    <p>Spare parts</p>
                </div>
                <div className="mx-5">
                    <h6>Stay Updated With Us</h6>
                    <input className="my-3 pe-5 ps-1 py-1 border border-none" type=" email" placeholder="Enter your e-mail" />
                    <br />
                    <button className="bg-warning py-2  px-3 border border-none rounded text-dark fw-bolder">Sign Up</button>
                </div>
            </div>
            <div className="bg-dark text-white text-center py-1">
                <i className="far fa-copyright"></i> All <span className="text-warning">Rights</span> Reserved
            </div>
        </div>
    );
};

export default Footer;