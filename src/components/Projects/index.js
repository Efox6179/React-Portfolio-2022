import React from 'react';
import './style.css';

const Projects = () => {
    return (
        <div className="container" id="portfolio">
            <div className="row justify-description-center">
                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/weather2.PNG`} className="card-img-top border-bottom"
                                alt="Weather Dashboard" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Weather Dashboard</h3>
                            <p className="card-text">
                            This app allows users to access the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index based off a simple search imputted by the user.
                            </p>
                           

                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                
                                <a href="https://github.com/Efox6179/weather-dashboard-ethan" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/peregrinate.PNG`} className="card-img-top border-bottom"
                                alt="Screenshot of peregrinate app" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Peregrinate</h3>
                            <p className="card-text">
                                In this app the user selects a country and it returns the flag of said country and the currency conversion rate from USD to countries currency. (Group Project)
                            </p>
                            
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://efox6179.github.io/Peregrinate/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/Efox6179/Peregrinate" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100 pb-5">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/quiz.png`} className="card-img-top border-bottom"
                            alt="Screenshot of quiz" />
                        <div className="card-body mb-5 pl-0">
                            <h3>Quiz Game</h3>
                            <p className="card-text">
                            This is a quiz in which the user has 60 seconds to complete, the Quiz is a total of 10 questions.
                            </p>
                           
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://efox6179.github.io/EthanF-Quiz/" className="btn mr-2" target="_blank" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/Efox6179/EthanF-Quiz" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/defichallenge.png`} className="card-img-top border-bottom"
                                alt="Defi Challenge" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>Defi challenge</h3>
                            <p className="card-text">
                            An app my group and I created that allows you to track goals for yourself and find others who are striving for the same goals. (Group Project)
                            </p>
                           
                            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="https://defi-challenge.herokuapp.com/" target="_blank" className="btn mr-2" rel="noreferrer">
                                    <i className="fas fa-laptop-code"></i></a>
                                <a href="https://github.com/Efox6179/DefiChallenge" target="_blank" className="btn" rel="noreferrer">
                                    <i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/comingsoon`} className="card-img-top border-bottom"
                                alt="Screenshot of Weather Dashboard" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>:/</h3>
                            
                           
                            
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div className="card text-center h-100">
                        <div className="imageBox">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/comingsoon`} className="card-img-top border-bottom"
                                alt="Screenshot of Code Quiz" />
                        </div>
                        <div className="card-body mb-5 pl-0">
                            <h3>:/</h3>
                          
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;