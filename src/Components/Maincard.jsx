import {NavLink} from 'react-router-dom';
import Img1 from '../images/boot1.svg';
function Maincard({title , subTitle , desc, btn1 , btn1Link , btn2 , btn2Link , imgSrc}){
    return(
        <>
            <section className="main-heading d-flex align-items-center justify-content-center pt-4 pt-md-0 pt-lg-0 pt-xl-0 pb-5 pb-md-0 pb-lg-0 pb-xl-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-xl-6 col-xxl-6 text-center text-md-center text-lg-start order-1 order-lg-0 order-xl-0">
                            <h1 className='text-capitalize fw-bolder display-4'>{title}</h1>

                            <h2 className='fw-light blue'>{subTitle}</h2>
                            <p className='small-desc text-capitalize'>{desc}</p>
                            <div className="btns">
                                <NavLink className="btn btn-primary text-light btn-primary-custom bg-blue me-5" exact to={btn1Link}>{btn1}</NavLink>
                                <NavLink className="btn btn-primary text-light btn-primary-custom bg-blue" exact to={btn2Link}>{btn2}</NavLink>
                                
                            </div>
                        </div>
                        <div className="col-12 check col-lg-6 col-xl-6 col-xxl-6 text-center text-lg-end text-xl-end p-2 order-0 order-lg-0 order-xl-0">
                            <img src={imgSrc} id="heading-image" className='img-fluid' alt="hello bro" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Maincard;