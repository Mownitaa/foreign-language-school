import React from 'react';
import './Teachers.css'
const Teachers = () => {
    const ryan = 'https://cdn.britannica.com/93/215393-050-E428CADE/Canadian-actor-musician-Ryan-Gosling-2016.jpg';
    const muzamil = 'https://1.bp.blogspot.com/--9dYq00tv9o/Tkjl29-jrQI/AAAAAAAABhI/jrHoGy2V64I/s1600/Muzamil_Ibrahim_300.jpg';
    const jung = 'https://upload.wikimedia.org/wikipedia/commons/0/01/Jung_Woo-sung_at_BIFF_2013_01.jpg';
    const taylor = 'https://www.nydailynews.com/resizer/Y4n86NNH9iU84ChNDbYMfs5ZeVI=/415x531/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/H6Y6YYGISP6EJUMJYBPFR42TWU.jpg';
    const jin = 'https://pbs.twimg.com/media/Ece7ZUxXYAE1s0k.jpg';
    const doja = 'https://i.pinimg.com/736x/09/78/7b/09787b70a023f6577544034a1b619527.jpg';
    return (
        <div>

            <p className="bg-light px-5 py-3 fw-bold lh-lg text-center">Our courses will be continued by <span className="fw-bold fs-4 text-primary">Native Speakers</span> and <span className="fw-bold fs-4 text-primary">Certified Teachers</span> from all over the world.
            </p>

            <div className="text-center">
                <h1 className="my-5">Some of Our <span className="text-warning">Amazing</span> Teachers</h1>
            </div>

            {/* about teachers */}
            <div className="container my-5 pb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 ">
                            <img src={ryan} className="card-img-top teachers" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title fw-bold p-2">Ryan Gosling</h3>
                                <p className="card-text">Hola! Mi nombre es Gosling. I am a Spanish native speaker from Argentina.I am very proud to teach my language and my culture to you guys I have been working in education for 5 years.</p>
                                <h5 className=" pt-4">Experienced for <span className="text-danger fw-bold">2 years</span> </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={muzamil} className="card-img-top  teachers" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title fw-bold p-2">Muzamil Ibrahim</h3>
                                <p className="card-text">Bienvenidos! Muzamil Ibrahim.Hindi is my native tongue. I love traveling, animals, and of course, teaching. I love teaching Hindi and I try to bring as much of my culture into the classroom as possible.</p>
                                <h5 className=" pt-4">Experienced for <span className="text-danger fw-bold">3 years</span> </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={jung} className="card-img-top teachers" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title fw-bold p-2">Jung Woo-sung</h3>
                                <p className="card-text">Hola a todos! Yo soy Jung Woo-sung.  I am a student of psychology at the University of Costa Rica and an avid learner of languages. I speak Spanish, English and French and I am currently learning Italian and German. </p>
                                <h5 className=" pt-4">Experienced for <span className="text-danger fw-bold">4 years</span> </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={taylor} className="card-img-top teachers" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title fw-bold p-2">Taylor Swift</h3>
                                <p className="card-text">Hi everyone, this is Taylor Swift. I am a student of English
                                    literature at the University of Oxford and an avid learner of languages.I was born and raised in America and my whole family is American.</p>
                                <h5 className=" pt-4">Experienced for <span className="text-danger fw-bold">2 years</span> </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={jin} className="card-img-top teachers" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title fw-bold p-2">Son Ye-Jin</h3>
                                <p className="card-text">Hello!I am Son Ye-Jin.Korean is my native tongue. I love traveling, animals, and of course, teaching. I love teaching Korean and I try to bring as much of my culture into the classroom as possible.</p>
                                <h5 className=" pt-4">Experienced for <span className="text-danger fw-bold">3 years</span> </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={doja} className="card-img-top teachers" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title fw-bold p-2"> Doja Cat</h3>
                                <p className="card-text">This is Doja Cat .Chinese is my native tongue. I love traveling, animals, and of course, teaching. I love teaching Chinese and I try to bring as much of my culture into the classroom as possible.</p>
                                <h5 className=" pt-4">Experienced for <span className="text-danger fw-bold">5 years</span> </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;