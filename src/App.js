import './App.css';

import Home from "../components/Home"
import UsersList from "../components/UsersList"
import ProductsList from "../components/ProductsList"

import { 
  BrowserRouter as Router,
  Link,
  Switch, 
  Route 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/usuarios">Usuarios</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>      
        </ul>  
      </Router>

      <Switch>
        <Route path= "/">
          <Home />
        </Route>  
        <Route path= "/usuarios">
          <UsersList />
        </Route>  
        <Route exact path= "/productos">
          <ProductsList />
        </Route>  
      </Switch>    

    </div>
  );
}

export default App;
