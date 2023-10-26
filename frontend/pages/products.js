import Link from 'next/link'
import React from 'react'

function Products(props) {
  return (
    <div className="container mx-auto px-4" >
      <section class="text-gray-600 body-font">
  <div class="container px-5 md:py-24 mx-auto">
    <div class="flex flex-wrap w-full md:mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Products </h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
      {props.products.data.map((item) =>{
        return (
          <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <img class="h-96 rounded mb-8 m-auto" src= {"http://localhost:1337"+item.attributes.Image.data.attributes.url} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.Category}</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.Title}</h2>
          <p class="leading-relaxed text-base">{item.attributes.Description}</p>
          <Link href={`/product/${item.attributes.Slug}`}><button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm mt-10 sm:mt-0">Buy Now</button></Link>
        </div>
      </div>
        )
      })}
     
    </div>
  </div>
</section>
    
    
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps(context) {

  let headers = {Authorization: "bearer 9907802e956b8c93306adc182b1154bb2a806a11e635a18740ccf1e7c0a9c3a92c7c3cdba11434b5f7c552dc95685d8b469c095df1657528287c49ad4366a42fc36f6f2b0c9d9820c42eca6aadfa2aa0dcf65d50977c8ca3dd155438afe9449ef44a6e076558cda1e7a011f0c3f8e1bd8a406564102c7b514024fbc5dcb11a91"}
 let a = await fetch("http://192.168.4.203:1337/api/products?populate=*" , {headers:headers})
  let products = await a.json()
  console.log(products.data[0].attributes.Image.data.attributes.url)
  // Pass data to the page via props
  return { 
    props: { products: products},
  }
}
 
export default Products