import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Link href= "/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img className = "w-10" src='/logo.svg' alt=''></img>
      <span class="ml-3 text-xl">MyShop</span>
    
    </Link> 
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href= "/" class="mr-5 hover:text-gray-900"> Home </Link>
      <Link href= "/about" class="mr-5 hover:text-gray-900"> About </Link>
      <Link href= "/products" class="mr-5 hover:text-gray-900"> Products </Link>
      <Link href= "/contact" class="mr-5 hover:text-gray-900"> Contact Us </Link>
    </nav>
    <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm mt-10 sm:mt-0">Login</button>
  </div>
</header>
  )
}

export default NavBar