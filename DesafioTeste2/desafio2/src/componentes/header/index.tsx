import React from 'react';
import './style.css';
import '../../assets/style/global.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo.png'

interface HeaderProps{
    descricao: string;
}

const Header:React.FC<HeaderProps>=(props)=>{
    return(
        <div className="header">
            <img className="imgLogo" src={logo} alt="Imagem de logo do site"/>
            <p>{props.descricao}</p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/filmes">Filmes</Link></li>
            </ul>
        </div>
    )
}

export default Header;