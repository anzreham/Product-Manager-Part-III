import logo from './logo.svg';
import './App.css';
import Main from './views/Main.js';
import Detail from './views/Detail';
import Update from './views/Update.js';


import {Router} from "@reach/router";

function App() {
  return (
    <div className="App">
     < Router>
     <  Main path ="product" exact />
       <Detail path="/product/:id" />
       <Update path="product/edit/:id"/>
     </Router>

   

      
    </div>
  );
}

export default App;
//                 return <a to = {"product/" + product._id} key={idx}>{product.title}</a>
