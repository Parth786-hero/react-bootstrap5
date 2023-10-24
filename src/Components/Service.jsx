import Card from "./Card";
import Bag from './bag.js';
function Service(){
    return(
        <>
            <div className="service-section">
                <h2 className="text-center pt-4 text-capitalize blue">services</h2>
                <div className="container">
                    <div className="row g-4 mx-auto my-3">
                        {
                            Bag.map((ele , id)=>{
                                return <Card key={id} {...ele}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default Service;