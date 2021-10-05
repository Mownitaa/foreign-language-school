import React from 'react';

const About = () => {
    const image = 'https://img.freepik.com/free-vector/man-getting-award-writing_74855-5891.jpg?size=338&ext=jpg';
    const contactImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStfNinnuVotJmL2g1ec-yzyJc8w36hlUDCV_y6QAhJro-_xS8Oy4wgXQVOYhr6IgFwsnU&usqp=CAU';
    return (
        <div className="container">
            <h1 className="text-center bg-light p-5 mb-5">Here's About <span className="text-danger">Our Goals</span> and How <span className="text-danger">We Can Help</span> You Get Fluent In Any Language</h1>
            <div className="d-flex">

                {/* about our goals section */}
                <div> <h4 className="text-danger fw-bolder my-4">Goals</h4>
                    <p> The courses will be focusing on the goals of language teaching and learning. It discusses the external goals- which relates to
                        the usage of the learnt language outside of the classroom context as well as the internal category, the goals are related to the individual’s
                        mental development.</p>
                    <button className="border border-danger rounded mt-5 p-4 fw-bold">Learn More</button>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>

            {/* about our assistance section */}
            <div className=" my-4 py-5">
                <h4 className="text-danger fw-bolder mb-4">Assistance</h4>
                <div className="d-flex">

                    <div className="px-3">
                        <div className="border border-danger mb-5 p-3">
                            <h4 className="bg-light mb-3"><i className="fas fa-hand-point-right"></i> WEEKLY ONLINE CONVERSATION PARTIES</h4>
                            <p className="pb-5">Every week, we meet online to have fun with the language. We call these conversation parties because what we do in these meetings can range from watching movies, doing quizzes, participating in fervent debates or even attending a guided live city tour from one of our teachers.  </p></div>
                        <div className="border border-danger mb-5 p-3">
                            <h4 className="bg-light mb-3"><i className="fas fa-hand-point-right"></i> GREAT FLEXIBILITY</h4>
                            <p className="pb-5">
                                Once you register for a course, your registration is valid for two years.Though all the courses is designed for mainly 6 months. You can take breaks and rejoin courses as many times as you want within that period. We are flexible enough to accommodate work shift changes, important personal events or college/school examinations.
                            </p>
                        </div>

                    </div>

                    <div className="px-3">
                        <div className="border border-danger mb-5 p-3">
                            <h4 className="bg-light mb-3"><i className="fas fa-hand-point-right"></i> GET SESSION RECORDINGS IF YOU MISS A CLASS</h4>
                            <p className="pb-5">If you miss a class for any reason( although we don't recommend it at all), you can access the recordings, and ping your trainer with questions. </p>
                        </div>
                        <div className="border border-danger mb-5 p-3">
                            <h4 className="bg-light mb-3"><i className="fas fa-hand-point-right"></i> PLACEMENT SUPPORT</h4>
                            <p className="pb-5">Being a language expert is also a lucrative career option and is a significant value addition to your CV. If you are looking to make a career in the field, we will also help you with the job search after level B2. We already have dozens of our alumni working in various MNCs and international schools. </p>
                        </div>

                    </div>

                </div>
            </div>
            {/* happy learning */}
            <div className="d-flex justify-content-center mb-5">
                <div>
                    <img src={contactImg} alt="" />
                </div>
                <div className="mt-5 ms-5">
                    <h3>For Further Information</h3>
                    <p><i className="fas fa-envelope text-primary"></i>  foreign.lang@gmail.com</p>
                    <p><i class="fas fa-phone text-primary"></i> +00874588556</p>
                </div>

            </div>
        </div>
    );
};

export default About;