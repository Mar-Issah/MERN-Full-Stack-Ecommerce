import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import SuccessPage from './pages/SuccessPage';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

//does not display all product unless user selects category from homepage

//when user clicks on product, accpts product id and goes to details page

//if user is present from the redux store, then redirect to homepage
const App = () => {
  const user = useSelector((state) => state.user.currentUser);

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
          <ProductDetail />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
        <Route path='/register'>{user ? <Redirect to='/' /> : <Register />}</Route>

        <Route path='/success'>
          <SuccessPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
