import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {


    return (
        <div className="w-full overflow-hidden">
            <ToastContainer/>
            <Header/>
            <About/>
            <Projects/>
            <Testimonials/>
            <Contact/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}

export default App
