import React, { useState } from 'react'

export default function Contato(){
  const [msg, setMsg] = useState('')
  return (
    <main className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Contato</h2>
      <form className="max-w-md">
        <label className="block">Nome</label>
        <input className="border p-2 w-full rounded mb-3" />
        <label className="block">E-mail</label>
        <input className="border p-2 w-full rounded mb-3" />
        <label className="block">Mensagem</label>
        <textarea className="border p-2 w-full rounded mb-3" value={msg} onChange={e=>setMsg(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Enviar</button>
      </form>
    </main>
  )
}
