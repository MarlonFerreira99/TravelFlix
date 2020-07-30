import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import RegisterVideo from './pages/register/video';
import RegisterCategory from './pages/register/category';


// desafio para customizar essa pagina na descricao
const Page404 = ()=>(<div>NOT FOUND - 404</div>);


ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/cadastro/video" component={RegisterVideo} />
          <Route path="/cadastro/categoria" component={RegisterCategory}/>
          <Route component={Page404} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


