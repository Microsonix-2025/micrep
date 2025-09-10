import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <main className="container mx-auto p-6">
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-3xl font-bold">Microsonix — Som profissional ao seu alcance</h2>
          <p className="mt-3 text-gray-700">Microfones, kits e acessórios para podcast, estúdio e eventos. Envio nacional, pagamentos em Real e suporte rápido.</p>
          <Link to="/catalogo" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Ver Catálogo</Link>
        </div>
        <div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-6 flex items-center justify-center">
            <img src="/assets/cover-portrait.jpg" alt="Banner" className="max-h-60" />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h3 className="font-semibold text-xl">Produtos em destaque</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4"> 
          <div className="col-span-1 border rounded-lg p-4">Demo Product</div>
        </div>
      </section>
    </main>
  )
}
