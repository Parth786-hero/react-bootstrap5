import Maincard from "./Maincard";
import Img from '../images/boot3.svg';
function About(){
    return(
        <>
            <Maincard
                title = {["i am 23 , and", " " ,<span className="blue">still </span> , "single by the way"]}
                subTitle = "----- type 'A' personality -----"
                desc = "see , excess of everything is not good , this is my personal experience , though i overthink but getting overmature too has its drawbacks therefore enjoy every part of your life , in the name of GOD ."
                btn1 = "service"
                btn2 = "Home"
                btn1Link="/service"
                btn2Link="/"
                imgSrc={Img}
            />
        </>
    );
}
export default About;