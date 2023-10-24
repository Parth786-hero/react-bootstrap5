import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

import {Route , Routes} from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import '../index.css';
import Footer from './Footer';
function App(){
    
    return(
        <>
            <Navbar/>
            <Routes>
                <Route exact path = "/"        element={<Home/>}/>
                <Route exact path = "/about"   element={<About/>}/>
                <Route exact path = "/service" element={<Service/>}/>
                <Route exact path = "/contact" element={<Contact/>}/>
                <Route path = "*" element={<Home/>}/>
            </Routes>
            <Footer/>
        </>
    );
}
export default App;