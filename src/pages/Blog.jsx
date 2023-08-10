import React from "react";
import NavBar from '../components/NavBar.jsx';
import { Link } from "react-router-dom";

const Blog = () => {

    return (
        <div>
            <NavBar />
            <div className="body-blog">
                <div>
                    <div>
                        <h1 className='text-3xl mb-2 font-bold'>B L O G</h1>
                        <hr className="mt-5 mb-5  border-t-2 border-black" />
                    </div>
                    <div>
                        <article className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                            <div  className="bg-slate-100 mb-2 p-6 ">
                                <Link to="/blogpage/githubdeploy-page">
                                    <h1 className="font-bold">How to deploy a page using github</h1>
                                </Link>
                                <p className="text-xs mt-5">Web-development</p>
                            </div>
                            {/* <div  className="bg-slate-100 mb-2 p-6 ">
                            </div>
                            <div  className="bg-slate-100 mb-2 p-6 ">
                            </div>
                            <div  className="bg-slate-100 mb-2 p-6 ">
                            </div> */}
                        </article>
                    </div>
                </div>
            </div>


        </div>
        );
  };

  export default Blog;