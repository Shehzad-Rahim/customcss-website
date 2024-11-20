import Image from "next/image"
import Link from "next/link"
import trendingCard1 from '../../../public/images/trendingcard1.png'
import trending1 from '../../../public/images/trending1.png'
import trending2 from '../../../public/images/trending2.png'
import trending3 from '../../../public/images/trending3.png'
function page() {
  return (
    <div id="trending-container">
      <h1>Trending Products</h1>
      <div className="trending-products">

        {/* product 1 */}
        <div className="product">
        <Image className="trending-img" src={trending1} alt="product1"></Image>
        <div className="product-card">
            <Image className="card-img" src={trendingCard1} alt="product1"></Image>
            <p><span>15643+</span> orders in 24hrs</p>
            <p>Most sold in last 3 days</p>
            <p><Link className="btn" href={'products'}>Buy Now</Link></p>
        </div>
        </div> 
        {/* product 2 */}
        <div className="product">
        <Image className="trending-img" src={trending2} alt="product2"></Image>
        <div className="product-card">
            <Image className="card-img" src={trending2} alt="product2"></Image>
            <p><span>14230+</span> orders in 24hrs</p>
            <p>Most sold in last 2 days</p>
            <p><Link className="btn" href={''}>Buy Now</Link></p>
        </div>
        </div>
        {/* product 3 */}
        <div className="product">
        <Image className="trending-img" src={trending3} alt="product3"></Image>
        <div className="product-card">
            <Image className="card-img" src={trending3} alt="product3"></Image>
            <p><span>12034+</span> orders in 24hrs</p>
            <p>Most sold in last 24hrs</p>
            <p className="btn"><Link className="btn" href={''}>Buy Now</Link></p>
        </div>
        </div>
         
      </div>
    </div>
  )
}

export default page
