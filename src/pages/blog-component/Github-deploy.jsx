import React from "react";
import NavBar from '../../components/NavBar.jsx';
import ComputerImage from '../../assets/images/computer-image.jpg'
import LinkedInButton from "../../components/LinkedInButton.jsx";
import GithubButton from "../../components/GithubButton.jsx";

const GithubDeploy = () => {
    return (
        <div>
            <NavBar />
            <div className="body-component">
                <h1 className="text-xl font-bold mb-5">How to deploy a React App using github</h1>
                <img src={ComputerImage} alt="Computer Image" />
                <p className="text-left">Step by step tutorial</p>
                <ul className="">
                    <li className="text-md font-bold m-5">1. Create a folder.</li>
                    <li className="text-md font-bold m-5">2. Open visual studio → open folder</li>
                    <li className="text-md font-bold m-5">3. Install the dependencies you need</li>
                    <li className="text-md font-bold m-5">4. In package.json: add "devDependencies" </li>
                    <li className="text-md font-bold m-5" >5. Open the terminal write cd folder → and install npm i gh-pages -D</li>
                    <li className="text-md font-bold m-5">6. In package.json add "homepage": "https://usernamegithub.github.io/numefolderepository", "predeploy": "npm run build",  "deploy": "gh-pages -d build",</li>
                    <p>usernamegithub needs to be your username on GitHub</p>
                    <li className="text-md font-bold m-5">7. Push the new files to the remote GitHub repository</li>
                    <p >In terminal → git init, git add ., git commit -m "first commit"</p>
                    <li className="text-md font-bold m-5">8. Go to github and create a new repository</li>
                    <li className="text-md font-bold m-5">9. In the terminal add </li>
                    <li className="text-md font-bold m-5">→ git remote add origin https://github.com/usernamegithub/numerepository.git</li>
                    <li className="text-md font-bold m-5">→ git branch -M main</li>
                    <li className="text-md font-bold m-5">→ git push -u origin main</li>
                    <li className="text-md font-bold m-5">10. npm run deploy → A Published message will appear</li>
                    <li className="text-md font-bold m-5">Done!</li>
                </ul>
                <div className="buttons inline-flex space-x-2 mt-5">
                    <LinkedInButton  />
                    <GithubButton />
                </div>
            </div>
        </div>
        );
  };

  export default GithubDeploy;