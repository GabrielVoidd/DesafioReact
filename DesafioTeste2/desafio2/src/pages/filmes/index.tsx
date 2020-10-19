import React, {useState, useEffect} from 'react';
import Header from '../../componentes/header/index';
import Footer from '../../componentes/footer/index';
import './style.css';

function Filmes()
{
    const[filmes, setFilmes] = useState([]);
    const [filme,setFilme] = useState('');

    useEffect(()=>{
        listarFilmes();
    },[]);

    const listarFilmes = ()=>{
        fetch('http://localhost:5000/api/filmes',{
            method: 'GET'
        })
        .then(response => response.json())
        .then(dados =>{
            setFilmes(dados);
        })
        .catch(err => console.error(err));
    }

   

    return(
        <div>
            <Header descricao="Venha conhecer nossos filmes"/>
            <h1>Filmes</h1>
            <div className="form">
                <table>
                    <thead>
                        <tr>
                            <td>Título</td>
                            <td>Gênero</td>
                        </tr>
                    </thead>
                    <tbody>
                        {filmes.map((item:any)=>
                            <tr key={item.idFilme}>
                                <td>{item.titulo}</td>
                                <td>{item.idGeneroNavigation.nome}</td>
                            </tr>
                        )}

                       
                    </tbody>
                </table>
                <p ></p>
            </div>
            <Footer/>
        </div>
    )
}

export default Filmes;