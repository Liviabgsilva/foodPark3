import React, { useContext } from 'react'
import './CardProduto.css'
import { GlobalContext } from '../contexts/GlobalContext'

function CardProdutos({p}) {
const {adicionarAoCarrinho} = useContext(GlobalContext)


  return (
    <div className='con-cardapio'>
        <h3>{p.nome}</h3>
        <p>R${p.preco.toFixed(2).replace('.',',')}</p>
        <button onClick={()=> adicionarAoCarrinho(p.id,"Taverna")}>
            🛒</button>
    </div>
  )
}

export default CardProdutos