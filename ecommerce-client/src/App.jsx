import Product from './pages/Product';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import Success from './pages/Success';
// import { useSelector } from 'react-redux';

//does not display all product unless user selects category from homepage

//when user clicks on product, accpts product id and goes to details page

//if user is present then redirect to homepage
const App = () => {
  //const user = useSelector((state) => state.user.currentUser);

  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products/:category'>
          <ProductList />
        </Route>
        <Route path='/product/:id'>
          <Product />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
        <Route path='/register'>{user ? <Redirect to='/' /> : <Register />}</Route>

        {/* <Route path='/success'>
    //  <Success />
    // </Route>  */}
      </Switch>
    </Router>
  );
};

export default App;
