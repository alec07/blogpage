import React from 'react';
import { Link } from 'react-router-dom';
import { ImLinkedin2 } from "react-icons/im";

function LinkedInButton({ label, onClick }) {
    return (
        <button className='bg-black p-2 text-white rounded-md flex items-center space-x-2'>
            <ImLinkedin2 />
            <Link to={'https://www.linkedin.com/in/grigore-corina/'} className="button">
                LinkedIn
            </Link>
        </button>
      );
    }

export default LinkedInButton;