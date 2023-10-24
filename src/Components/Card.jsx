import {NavLink} from 'react-router-dom';
function Card({imgSrc , title , desc}){
    return(
        <>
        <div className="col-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
            <div className="card mx-auto mb-3" style={{width: "18rem"}}>
                <img src={imgSrc} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title blue fw-bold ">{title}</h5>
                    <p className="card-text fw-light">{desc}</p>
                    <NavLink to="/" className="btn btn-outline">know more</NavLink>
                </div>
            </div>
        </div>
        </>
    );
}
export default Card;