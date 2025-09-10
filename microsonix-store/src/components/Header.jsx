import React from 'react'
import { Link } from 'react-router-dom'
import useCart from '../hooks/useCart'

export default function Header(){
  const { cartCount } = useCart()
  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-full bg-white/10 w-10 h-10 flex items-center justify-center">🎙️</div>
          <div>
            <h1 className="font-bold text-lg">Microsonix</h1>
            <div className="text-sm">Loja online de microfones</div>
          </div>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/catalogo" className="hover:underline">Catálogo</Link>
          <Link to="/contato" className="hover:underline">Contato</Link>
          <Link to="/carrinho" className="bg-white/10 px-3 py-2 rounded-md">Carrinho ({cartCount})</Link>
        </nav>
      </div>
    </header>
  )
}
