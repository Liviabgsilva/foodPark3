import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'

function PaginaCarrinho() {
    const{Carriho} = useContext(GlobalContext)
  return (
    <div className='cont-Carrinho'>
        <Navbar />
        <h1>Carrinho</h1>
        <p>Aqui vocês vão colocar os produtos do carrinho...:D</p>

        {PaginaCarrinho.map((item)=>(
            <div className='item-carrinho'>
                <p>{item.produto.nome}
                    qtd: {item.quantidade}
                    R${item.produto.preco.toFixed(2).replace('.', ',')}
                </p>
                console.log(item)
            </div>
        ))}

        <p>produtos no carrinho {PaginaCarrinho.length}</p>
    </div>

  )
}

export default PaginaCarrinho