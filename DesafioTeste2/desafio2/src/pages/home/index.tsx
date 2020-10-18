import React from 'react';
import Header from '../../componentes/header/index'
import Footer from '../../componentes/footer/index'
import './style.css'

function Home()
{
    return(
        <div>
            <Header descricao=""/>
            <h1>Home</h1>
            <Footer/>
        </div>
    )
}

export default Home;