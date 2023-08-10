import React from "react";
import NavBar from '../components/NavBar.jsx';
import '../assets/body.css';
import myphoto from '../assets/images/my-photo.jpg';
import LinkedInButton from "../components/LinkedInButton.jsx";
import GithubButton from "../components/GithubButton.jsx";

const About = () => {
    return (
        <div>
            <NavBar />
            <div className="body-component">
                <img src={myphoto} alt="Photo with me" />
                <p className='mb-2 mt-2'>My name is Corina Alexandra. I'm a computer science student.</p>

                <p className='mb-2'>During my studies in computer science, I was involved in innovative projects and learned to approach technological challenges with determination and creativity. I love to always learn and stay up to date with the latest trends and technologies in the industry.</p>
                <p>I am looking for an opportunity to share my passion and knowledge to contribute to innovative and challenging projects. I am looking forward to being part of a talented team and bringing value to a company that shares my values.</p>
                <div className="buttons inline-flex space-x-2 mt-5">
                    <LinkedInButton  />
                    <GithubButton />
                </div>
            </div>

        </div>

        );
  };

  export default About;