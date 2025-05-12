import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import PrivateRoute from "./components/PrivateRoute";

import AdminProdutos from "./pages/admin/AdminProdutos";
import EditarProduto from "./pages/admin/EditarProduto";



function App() {

  return (
    <>
     <Router>
      <Routes>
            {/* paginas */}
         {/* Publicos */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>

         {/* Administração */}
        <Route path="/admin/produtos" element={<AdminProdutos />} />
        <Route path="/admin/produtos/:id/editar" element={<EditarProduto />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
