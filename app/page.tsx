import React from 'react'
import ProductCard from './components/ProductCard'
import Link from 'next/link'

function page() {
  return (
    <div>
      <h1>Hello World</h1>
      <ProductCard />
      <Link href="/users">Users</Link>
    </div>
  )
}

export default page