import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Contact(){
    const navigate = useNavigate();
    const [bag , updateBag] = useState({name : "" , number : "" , email : "" , address : "" , message : ""});
    function shoot(e){
        const {name , value} = e.target;

        updateBag({...bag , [name] : value});
    }
    function submit(e){
        e.preventDefault();
        const {name , number , address , email} = bag;
        alert(`Hey ${name} , your phone number - ${number} and email - ${email} are very lucky to me and your home town - ${address} is my dreame place .`);
        updateBag({name : "" , number : "" , email : "" , message : "" , address : ""});
        navigate("/");
    }
    return(
        <>
            <h2 className="text-center text-capitalize my-4 md-heading">contact <span className="blue">me</span></h2>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-7">
                        <form className="mb-5" onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">full name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="ex : parth kapoor"
                                    onChange={shoot}
                                    name="name"
                                    value={bag.name}
                                    required={true}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">mobile number</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="ex : 76260-XXXXX"
                                    onChange={shoot}
                                    name="number"
                                    value={bag.number}
                                    required={true}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="ex : parth@example.com"
                                    onChange={shoot}
                                    name="email"
                                    value={bag.email}
                                    required={true}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Home town address</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="eg : abcd , 15X , state , India."
                                    onChange={shoot}
                                    name="address"
                                    value={bag.address}
                                    required={true}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Your feedback</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={shoot} name="message" value={bag.message} placeholder="enter your feedback here " required = {true}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn bg-blue text-light btn-primary-custom d-block w-100 mx-auto" type="submit">Submit my response</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;