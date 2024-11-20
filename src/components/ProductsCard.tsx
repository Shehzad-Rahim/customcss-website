import { StaticImageData } from 'next/image'
import Image from 'next/image'

interface Products{
    image : string | StaticImageData,
    title : string,
    brand : string,
    color : string,
    price : number
}
function ProductsCard({image , title , brand ,color , price } : Products) {
  return (
    <div id='productsCard'>
      <div className="products-image">
        <Image id='productsImage' src={image} alt='product image'></Image>
      </div>
      <div className="products-content">
        <h3>{title}</h3>
        <p><strong>Brand: </strong> {brand}</p>
        <p><strong>Color: </strong> {color}</p>
        <p><strong>Price: </strong> ${price}</p>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductsCard
