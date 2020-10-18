import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Filmes from './pages/filmes';

function Routers()
{
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
			<Route path="/filmes" component={Filmes}/>
        </BrowserRouter>
    )
}

export default Routers;