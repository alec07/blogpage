import React from "react";
import NavBar from '../components/NavBar.jsx';
import { Link } from 'react-router-dom';
import BankApp from '../assets/images/bank_app.jpg';
import BookBlog from '../assets/images/book-blog.jpg';
const Projects = () => {
    return (
        <div>
            <NavBar />
            <div className="body-component">
                <div>
                    <h1 className='text-3xl mb-2'>P R O J E C T S</h1>
                    <p className='text-xs'>Showcase of some of my projects.</p>
                    <hr className="mt-5 mb-5  border-t-2 border-black" />
                </div>
                <div>
                    <article className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                        <div  className="bg-slate-100 mb-2 p-6 ">
                            <img src={BankApp} alt="Imagine Bank App" className="w-full h-auto" />
                            <Link to='https://github.com/alec07/licenta_aplicatie_bancara_finala.git'>
                                <h2 className="uppercase font-bold text-xs leading-6 hover:text-blue-600 ">Bank App</h2>
                            </Link>
                            <p className="font-thin text-xs mb-4"> The app offers a simple and intuitive solution for banking transactions</p>
                        </div>
                        <div  className="bg-slate-100 mb-2 p-6 ">
                            <img src={BookBlog} alt="Imagine Bank App" className="w-full h-auto" />
                            <Link to='https://github.com/alec07/book_blog.git'>
                            <h2 className="uppercase font-bold text-xs leading-6 hover:text-blue-600">Simple Book Blog</h2>
                            </Link>
                            <p className="font-thin text-xs mb-4">Application that shows details of books that have been entered by a user</p>
                        </div>
                        <div  className="bg-slate-100 mb-2 p-6 ">
                            <Link to='https://github.com/alec07/text-to-binary.git'>
                            <h2 className="uppercase font-bold text-xs leading-6 hover:text-blue-600">Text to Binary</h2>
                            </Link>
                            <p className="font-thin text-xs mb-4">App where you can convert text to binary</p>
                        </div>

                    </article>
                </div>

            </div>

        </div>

        );
  };

  export default Projects;