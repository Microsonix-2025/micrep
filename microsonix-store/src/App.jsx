import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Carrinho from './pages/Carrinho'
import Contato from './pages/Contato'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-gray-50">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalogo" element={<Catalogo/>} />
          <Route path="/carrinho" element={<Carrinho/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
      </div>
      <footer className="bg-white border-t p-4 text-center text-sm">© Microsonix — Envio nacional • Pagamentos em R$</footer>
    </div>
  )
}
