import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import { useSelector } from 'react-redux';

function App() {
  //access the isAdmin field on the user from LS
  //also useSelector from react redux
  // const isAdmin = JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)?.isAdmin;
  const isAdmin = useSelector((state) => state.user.currentUser?.isAdmin);

  return (
    <Router>
      <Switch>
        <Route path='/login'>{isAdmin ? <Redirect to='/' /> : <Login />}</Route>
        <>
          <Topbar />
          <div className='container'>
            <Sidebar />
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/users'>
              <UserList />
            </Route>
            <Route path='/user/:userId'>
              <User />
            </Route>
            <Route path='/newUser'>
              <NewUser />
            </Route>
            <Route path='/products'>
              <ProductList />
            </Route>
            <Route path='/product/:productId'>
              <Product />
            </Route>
            <Route path='/newproduct'>
              <NewProduct />
            </Route>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
