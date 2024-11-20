import Image from "next/image"
import shoes from '../../public/images/shoes.png'
import logo from '../../public/images/logo.png'
import Link from "next/link"
function Hero() {
  return (
    <div id="hero">
        <div id="image">
            <div className="bg-content">
               <Link id="shoesLink" href={'products'}>Buy Now</Link>
            </div>
        <Image id="img" src={shoes} alt="hero image"></Image>
        </div>
        <div className="vLine">
            <div className="circle">
                <Image src={logo} alt="shoe logo" width={70} height={70}></Image>
            </div>
        </div>
      <div id="content">
        <h1>Welcome to SR Shoes</h1>
        <h2>Best Shoes collections</h2>
        <p>Welcome to SR Shoes, where comfort meets style! We are passionate about crafting high-quality, durable, and fashionable footwear that caters to every individual. Whether you are looking for casual sneakers, formal footwear, or sports shoes, SR Shoes has something for everyone.</p>
        </div>
    </div>
  )
}

export default Hero
