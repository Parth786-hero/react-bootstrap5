import Img1 from '../images/boot1.svg';
import Maincard from './Maincard';
function Home(){
    return(
        <>
            <Maincard
                title = {["Happy to be of assistance" , "" , <span className="blue"> at your</span> , " " , "service"]}
                subTitle = "Parth Kapoor"
                desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio inventore officia sequi esse amet tenetur, beatae suscipit neque! Pariatur distinctio odio consectetur quos ducimus labore!"
                btn1 = "contact"
                btn2 = "service"
                btn1Link = "/contact"
                btn2Link = "/service"
                imgSrc = {Img1}
            />
        </>
    );
}
export default Home;