import {NavLink} from 'react-router-dom';
function Navbar(){
   
    return(
        <>
            <section className="my-navbar pt-4">
                <nav className="navbar bg-white container navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink exact className="navbar-brand fw-bold" to="/">Parth <span className='blue'>Kapoor</span></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item mx-1">
                            <NavLink exact className={`nav-item nav-link`} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                            <NavLink exact className={`nav-item nav-link`} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                            <NavLink exact className={`nav-item nav-link`} to="/service">Service</NavLink>
                            </li>
                            <li className="nav-item mx-1">
                            <NavLink exact className={`nav-item nav-link`} to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}
export default Navbar;