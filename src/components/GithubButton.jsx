import React from 'react';
import { Link } from 'react-router-dom';
import { ImGithub } from "react-icons/im";

function GithubButton({ label, onClick }) {
    return (
        <button className='bg-black p-2 text-white rounded-md flex items-center space-x-2'>
            <ImGithub />
            <Link to={'https://github.com/alec07'} className="button">
                Github
            </Link>
        </button>
      );
    }

export default GithubButton;