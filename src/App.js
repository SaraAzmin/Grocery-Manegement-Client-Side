import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addproduct' element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}></Route>
        <Route path='/inventory/:productId' element={
          <RequireAuth>
            <ManageProduct></ManageProduct>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
