import React from 'react'
import useCart from '../hooks/useCart'

export default function Carrinho(){
  const { items, remove, total, clear } = useCart()
  return (
    <main className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
      {items.length===0 ? (
        <div>Seu carrinho está vazio</div>
      ) : (
        <div className="grid gap-4">
          {items.map(it=> (
            <div key={it.id} className="flex items-center gap-4 border p-3 rounded">
              <img src={it.image} className="w-20 h-20 object-contain" />
              <div className="flex-1">
                <div className="font-semibold">{it.name}</div>
                <div>Quantidade: {it.qty}</div>
              </div>
              <div className="font-bold">R$ {(it.price * it.qty).toFixed(2)}</div>
              <button onClick={()=>remove(it.id)} className="ml-4 text-red-600">Remover</button>
            </div>
          ))}

          <div className="text-right font-bold">Total: R$ {total.toFixed(2)}</div>
          <div className="flex gap-3 justify-end">
            <button onClick={clear} className="px-4 py-2 border rounded">Limpar</button>
            <button className="px-4 py-2 bg-green-600 text-white rounded">Finalizar Compra (Simulado)</button>
          </div>
        </div>
      )}
    </main>
  )
}
