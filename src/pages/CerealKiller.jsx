import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import './Paginas.css'

function CerealKiller() {
    const[imagem, setImagem] = useState({
        nome: 'foto-cereal-killer',
        url: "https://raw.githubusercontent.com/rafaellindemann/balaio/refs/heads/main/exercicioverso/food-park/cerealKiller.png"
    });
    
    const [produtos, setProdutos] = useState
    
    const fetchProdutos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/produtos');
            setProdutos(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

      const cadastrarProduto = async () => {
        try {
            const produto = {
                nome: "produto teste",
                estabelecimento: "Cereal ",
                preco: 404
            };
            const response = await axios.post('http://localhost:3000/produtos', produto);
            if (response.status === 201) {
                fetchProdutos();
                // limparForm();
            }
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
        }
    };
    
             const salvarProduto = async () => {
        try {
            const produto = {
                nome: "gordura trans",
                estabelecimento: "Cereal ",
                preco: 10
            };
            const response = await axios.put(`http://localhost:3000/produtos/16/`, produto);
            if (response.status === 200) {
                fetchProdutos();
                //setProdutoSelecionado(null);
               // limparForm();
            }
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
        }
    };
  const deletarProduto = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/produtos/${id}`);
            if (response.status === 200) {
                fetchProdutos();
            }
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
        }
    };

    useEffect(() => {
      alert('useEffect esta rodando')
    },[])



  return (
    <div className='cont-cereal'>
        <Navbar />
        <h1>Cereal Killer Cereal Bar</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quam, omnis velit doloribus ipsam quidem accusamus perspiciatis laudantium id suscipit quas porro, ullam nam deserunt consequatur nemo! Harum, nostrum fugit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestias, molestiae provident id necessitatibus repellat? Laborum eum deserunt ad numquam labore unde. Soluta, vero possimus? Quas tempore eligendi voluptatum nam?</p>
        <img className='img-cereal' src={imagem.url} alt="" />
        <button onClick={() => setImagem({
            nome: 'foto-cereal-killer',
            url: "https://github.com/rafaellindemann/balaio/blob/main/exercicioverso/food-park/killer.jpg?raw=true"
        })}>Surpresa</button>


        <p>
          produtos no cardapio:
          {produtos.map(p => (
            <cardProduto key={p.id} p={p} />
          ))}
        </p>
          <button onClick={cadastrarProduto}>Cadastrar teste</button>
           <button onClick={salvarProduto}>Editar teste</button>
           <button onClick={() => deletarProduto(16)}>Deletar teste</button>

    </div>
  )
}

export default CerealKiller 