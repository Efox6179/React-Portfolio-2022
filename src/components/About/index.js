import React from 'react';

export const About = () => {
    return (
        <div className="about">
            <h2>Hello,</h2>
            <strong>
               My name is Ethan Fox, I am a web developer from Kansas City, KS. 
            </strong>

            <h2 className="mt-5">Skills</h2>
            <div className="content">
                <div>
                    <strong>Languages</strong>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>JS</li>
                   
                </div>
                <div>
                    <strong>Some Fun Facts</strong>
                
                    <li>I LOVE the outdoors</li>
                    <li>I am an avid car enthusiast</li>
                    <li>I have 2 kittens named Walter and Ashar</li>
                    <li>Im learning rock climbing (yes.. i am supposed to be upside down)</li>

                    </div>

                    <br></br>

                    <div className="picture">
                <img src={`${process.env.PUBLIC_URL}/assets/images/outdoor.jpg`}
                    alt="Me"
                />
            </div>
            <div className="picture">
                <img src={`${process.env.PUBLIC_URL}/assets/images/car.jpg`}
                    alt="Me"
                />
            </div>
            <div className="picture">
                <img src={`${process.env.PUBLIC_URL}/assets/images/cats.jpg`}
                    alt="Me"
                />
            </div>
            <div className="picture">
                <img src={`${process.env.PUBLIC_URL}/assets/images/rockclimbing.jpg`}
                    alt="Me"
                />
            </div>
                </div>
                
                
            </div>
        
    )
}

export default About;