import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Main from './Main'
import NotFound from './components/NotFound';
import Nav from './components/Nav';
import Search from './components/Search';
 const App=()=> 

   ( 
    <div className="container">
   
   <BrowserRouter>
   
   
      <Switch>
  
      <Route exact path="/"  render={ (props) => (<Main query={"cats"}  {...props} />) } />
      <Route exact path="/search/cats" render={ (props) => (<Main query={"cats"}  {...props} />) } />
      <Route exact path="/search/dogs" render={ (props) => (<Main query={"dogs"}  {...props}  />) } />
      <Route exact path="/search/computers" render={ (props) => (<Main query={"computers"}  {...props}  />) } />
         <Route component={NotFound} />
      </Switch>
      </BrowserRouter>
    </div>
 
 
 


);
export default App ;