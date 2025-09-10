import React from 'react'

export default function ProductCard({product, onAdd}){
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center mb-3">
        <img src={product.image} alt={product.name} className="max-h-36" />
      </div>
      <h3 className="font-semibold">{product.name}</h3>
      <div className="text-sm text-gray-600">{product.category}</div>
      <div className="mt-2 font-bold">R$ {product.price.toFixed(2)}</div>
      <button onClick={()=>onAdd(product)} className="mt-3 bg-blue-600 text-white py-2 rounded-md">Adicionar ao Carrinho</button>
    </div>
  )
}
