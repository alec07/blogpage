import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects";
import Blog from './pages/Blog';
import GithubDeploy from './pages/blog-component/Github-deploy';



function App() {
  return (
<BrowserRouter>
    <Routes>

        <Route path='/blogpage/' element={<Home />} />
        <Route path='/blogpage/about' element={<About />} />
        <Route path='/blogpage/projects' element={<Projects />} />
		<Route path='/blogpage/blog' element={<Blog/>} />
		<Route path='/blogpage/githubdeploy-page' element={<GithubDeploy/>} />


    </Routes>
</BrowserRouter>
  );
};

export default App;
