import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Navbar from '../components/Navbar'
import './Paginas.css'
import CardProdutos from '../components/CardProdutos'

function Taverna() {
  const {carrinho, setCarrinho,cardapioTaverna} = useContext(GlobalContext)
  return (
    <div className='cont-taverna'>
        <Navbar />
        <h1>Taverna Periódica</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, vero veritatis! Asperiores illo incidunt quia modi saepe natus a at? Reprehenderit quam libero fugiat nobis vel fuga perspiciatis quis dicta?</p>
        <img className='img-taverna' src="./taberna-periodica.png" alt="" />
        {/* <h2>Carrinho de teste, só teste.</h2>
        <p>Testi testa teste de testes</p>
        <p>{carrinho[0].nome}</p> */}

          <h2>Cardapio da Taverna</h2>
          <div className='cardapio'></div>
          


          {cardapioTaverna.map((produto)=>(
            <CardProdutos p={produto} key={produto.id}/>
          ))}

    </div>
  )
}

export default Taverna