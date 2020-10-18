import React from 'react';
import Header from '../../componentes/header/index';
import Footer from '../../componentes/footer/index';
import './style.css';

function Filmes()
{
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
                        <td>info</td>
                        <td>info2</td>
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    )
}

export default Filmes;