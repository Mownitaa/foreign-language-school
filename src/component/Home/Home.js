import React from 'react';

const Home = () => {
    const url = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6JVJEaAT8FWwiBfVl1vECY/eccd28d76369194c1bae181bdef80140/hero-b.png?auto=format%2Ccompress&dpr=1&w=459&h=497&q=40';
    return (
        <div>
            <div className="bg-light p-3 text-center">
                <h6>Discover your learning skills driving growth accross 10 industries in the <span className="text-primary"><u><b>Industry Skill Report 2021</b></u></span></h6>
            </div>
            <div className="d-flex justify-content-between align-items-center m-5 px-3">
                <div className="me-5">
                    <h1 className="fw-bolder pb-3">Learn Language Faster</h1>
                    <p className="pb-5">Build your language skills with desired courses, and degrees online from world-class universities and companies.Have patience to perform our regular tasks including speaking and written tests to improve more efficiently.</p>
                    <h5 className="mb-3">We Collaborate With <span className="text-primary fw-bold">100+ Leading Universities and Companies</span></h5>
                    <button className="bg-light text-warning border  border-warning  rounded fs-5 fw-bolder p-3 px-4">Take a free trial session</button> <button className="
                    bg-warning border border-none rounded fs-5 fw-bolder me-2 py-3 px-4">Enroll Now</button>
                </div>
                <div>
                    <img src={url} alt="" />
                </div>
            </div>
            <div className="mx-5 mb-5 pb-5">
                <h2>Popular Topics</h2>
                <button className="border border-none my-3 me-4 px-5 py-3 border-dark bg-white text-primary fw-bolder">English</button>
                <button className="border border-none my-3 me-4 px-5 py-3 border-dark bg-white text-primary fw-bolder">Korean</button>
                <button className="border border-none my-3 me-4 px-5 py-3 border-dark bg-white text-primary fw-bolder">Spanish</button>
                <button className="border border-none my-3 me-4 px-5 py-3 border-dark bg-white text-primary fw-bolder">French</button>
                <button className="border border-none my-3 me-4 px-5 py-3 border-dark bg-white text-primary fw-bolder">Russian</button>
                <button className="border border-none my-3 me-4 px-5 py-3 border-dark bg-white text-primary fw-bolder">Chinese</button>
                <button className="border border-none my-3 me-4 px-5 py-3 border-dark bg-white text-primary fw-bolder">Hindi</button>

            </div>
        </div >
    );
};

export default Home;