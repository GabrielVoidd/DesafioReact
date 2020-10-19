import React, { useState, useEffect } from 'react';
import Header from '../../componentes/header/index';
import Footer from '../../componentes/footer/index';
import Highlight from '../../componentes/highlight';
import Input from '../../componentes/input';
import '../../assets/style/global.css'
import './style.css';

function Filmes() {
    const [filmes, setFilmes] = useState([]);
    const [filme, setFilme] = useState('');
    const [genero, setGenero] = useState('');

    useEffect(() => {
        listarFilmes();
    }, []);


    const listarFilmes = () => {
        fetch('http://localhost:3000/api/filmes', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(dados => {
                setFilmes(dados);
            })
            .catch(err => console.error(err));
    }

    function listagemFilmes(func: any) {
        return (e: any) => {
            func(e.target.value);
        }
    }


    return (
        <div>
            <Header descricao="Venha conhecer nossos filmes" />
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
                        {filmes
                            .filter((item: any) => {
                                return item.titulo.toLowerCase().includes(filme.toLowerCase()) &&
                                    item.idGeneroNavigation.nome.toLowerCase().includes(genero.toLowerCase())
                            })
                            .map((item: any) =>
                                <tr key={item.idFilme}>
                                    <td><Highlight
                                        children={item.titulo}
                                        toHighlight={filme}
                                    />
                                    </td>
                                    <td><Highlight
                                        children={item.idGeneroNavigation.nome}
                                        toHighlight={genero}
                                    />
                                    </td>
                                </tr>
                            )}

                        <tr>

                            <td>
                                <div className="div-input">
                                    <Input name="filme" label='Pesquisar filmes' value={filme} onChange={listagemFilmes(setFilme)} />
                                </div>
                            </td>
                            <td>
                                <div className="div-input">

                                    <Input name="genero" label='Pesquisar gênero' value={genero} onChange={listagemFilmes(setGenero)} />
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default Filmes;