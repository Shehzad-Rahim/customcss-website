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
        <h2>The simple website</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nisi officia non aspernatur, suscipit, repellat distinctio perspiciatis quos hic ab dolorum obcaecati quod! Dicta molestiae sequi quis eaque magni corporis!</p>
      </div>
    </div>
  )
}

export default Hero
