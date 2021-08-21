import { Slider } from "./Slideshow";
import { Shirts } from "./Shirts";
import { Tshirts } from "./Tshirt";
import { Jeans } from "./Jeans";
import { Category } from "./Categories";
import { Shorts } from "./Shorts";
import { Shoes } from "./Shoes";


const Home = () => {
    return (
        <div>
        <Slider />
        <Category />
        <Shirts />
        <Tshirts />
        <Jeans />
        <Shorts />
        <Shoes />
        </div>
    )
}

export default Home;