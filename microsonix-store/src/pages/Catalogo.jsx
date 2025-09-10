import React from 'react'
import { PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard'
import useCart from '../hooks/useCart'

export default function Catalogo(){
  const { add } = useCart()

  return (
    <main className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Catálogo</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {PRODUCTS.map(p=> <ProductCard key={p.id} product={p} onAdd={add} />)}
      </div>
    </main>
  )
}
