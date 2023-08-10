import React from "react";
import NavBar from '../components/NavBar.jsx';
import '../assets/body.css';
import myphoto from '../assets/images/my-photo.jpg';
import LinkedInButton from "../components/LinkedInButton.jsx";
import GithubButton from "../components/GithubButton.jsx";



const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="body-component">
                <img src={myphoto} alt="Photo with me" />
                <h1 className='text-3xl font-bold my-2'>Hi!</h1>
                <h1 className='text-3xl font-bold'>I'm Alexandra</h1>
                <hr className="mt-5 w-11 border-t-2 border-black" />
                <p className='mt-5'>As a woman in STEM, I am proud to be part of a diverse and growing community that inspires and motivates future generations of researchers and developers.</p>
                <div className="buttons inline-flex space-x-2 mt-5">
                    <LinkedInButton  />
                    <GithubButton />
                </div>
            </div>
        </div>

        );
  };

  export default Home;