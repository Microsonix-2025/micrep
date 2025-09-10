import { useState, useEffect } from 'react'

const KEY = 'microsonix_cart_v1'

export default function useCart(){
  const [items, setItems] = useState([])

  useEffect(()=>{
    try{
      const raw = localStorage.getItem(KEY)
      if(raw) setItems(JSON.parse(raw))
    }catch(e){ console.error(e) }
  },[])

  useEffect(()=>{
    localStorage.setItem(KEY, JSON.stringify(items))
  },[items])

  function add(product){
    setItems(prev=>{
      const found = prev.find(p=>p.id===product.id)
      if(found) return prev.map(p=>p.id===product.id?{...p, qty: p.qty+1}:p)
      return [...prev, {...product, qty:1}]
    })
  }

  function remove(id){ setItems(prev=>prev.filter(p=>p.id!==id)) }
  function clear(){ setItems([]) }

  const total = items.reduce((s,p)=>s + p.price * p.qty, 0)
  const cartCount = items.reduce((s,p)=>s + p.qty, 0)

  return { items, add, remove, clear, total, cartCount }
}
