import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import './Paginas.css'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'


function Home() {
    const{ usuario } = useContext(GlobalContext)
    const navigate = useNavigate()

    function testarNavigate(){
        // navigate('/pagina3')
    }
  return (
    <div className='container-home'>
        <Navbar />
        <h1>Food Park Parque de Comida</h1>
        <img className='img-park' src="./food-park.png" alt="" />
        <p>Usuário: {usuario}</p>
        <button onClick={testarNavigate}>Testar navigate</button>
    </div>
  )
}

export default Home