import ProductsCard from '@/components/ProductsCard'
import blueAddidas from '../../../public/images/addidas.png'
import runningShoes from '../../../public/images/Nike-running-shoes.png'
import basketBall from '../../../public/images/Nike-basketball-shoes.png'
import fashionShoes from  '../../../public/images/Black-blue-nike-shoes.png'
import premiumShoes from  '../../../public/images/Nike-shoes-premium.png'
import latherShoes from '../../../public/images/Black-mens-leather.png'
import addidasGold from '../../../public/images/Adidas-shoes-Gold.png'
import adidasFashion from '../../../public/images/Blue-adidas-shose.png'
import trending1 from '../../../public/images/trendingcard1.png'
import trending2 from '../../../public/images/trending2.png'
import trending3 from '../../../public/images/trending3.png'

function Products() {
  return (
    <div id='products-container'>
      <h1>Products</h1>
    <div id='products'>
        <ProductsCard 
         image={blueAddidas}
         title='Sport Shoes'
         brand='Adidas'
         color='Blue'
         price={300}/>

        <ProductsCard 
         image={trending1}
         title='Fashion Shoes'
         brand='Cherrie Blossom'
         color='Orange'
         price={500}/>

        <ProductsCard 
         image={runningShoes}
         title='Running Shoes'
         brand='Nike'
         color='Multi color'
         price={350}/>

        <ProductsCard 
         image={basketBall}
         title='BasketBall Shoes'
         brand='Nike'
         color='White'
         price={250}/>

        <ProductsCard 
         image={fashionShoes}
         title='Fashion Shoes'
         brand='Nike'
         color='Black & Blue'
         price={200}/>

<ProductsCard 
         image={trending2}
         title='Fashion Shoes'
         brand='Jordan'
         color='Black and Red'
         price={450}/>

        <ProductsCard 
         image={premiumShoes}
         title='Premium Shoes'
         brand='Nike'
         color='Red'
         price={200}/>

        <ProductsCard 
        image={latherShoes}
         title='Lather Shoes'
         brand='Menz'
         color='Black'
         price={200}/>

        <ProductsCard 
        image={addidasGold}
         title='Gold Shoes'
         brand='Adidas'
         color='Gold'
         price={350}/>

        <ProductsCard 
         image={trending3}
         title='Fashion Shoes'
         brand='Jordan'
         color='Yellow & Black'
         price={400}/>

        <ProductsCard 
        image={adidasFashion}
         title='Premium Shoes'
         brand='Adidas'
         color='Gold'
         price={250}/>

    </div>
    </div>
  )
}

export default Products
