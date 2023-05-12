import './App.css';
import Footer from './components/footer';
import NavBar from './components/navbar';
import Catalog from './pages/catalog';
import Home from './pages/home';
import Admin from './pages/admin';
import ShoppingList from './pages/shoppingList'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import About from './pages/about';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalState from './state/globalState';
import Cart from './pages/cart';


//import QuantityPicker from './components/quantityPicker';


function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar/>

          <div className='container-fluid'>
            <Routes>
              <Route path='/' element = {<Home />} />
              <Route path='/home' element = {<Home />} />
              <Route path='/catalog' element = {<Catalog />} />
              <Route path='/shoppingList' element = {<ShoppingList />} />
              <Route path='/about' element = {<About />} />
              <Route path='/admin' element = {<Admin />} />
              <Route path='/cart' element = {<Cart />} />

            </Routes>
          </div>

          

          <Footer/>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;

/** 
* My shopping FileList
* please create a new page on the system that will allow the user to create a list of products what he/she wish to buy
* the user will type the product name
* press a button

* the system will display the products on a bottom list

1- create component / css
2- import on app.js and create the route for it
3- create a menu link on navbar
4- work on the logic for the todolist/shopping list

*/