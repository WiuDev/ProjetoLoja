import "./App.css"
import Login from "./pages/auth/login";
import { Routes, Route } from "react-router-dom";
import Registro from "./pages/auth/registro";
import AdminDashboard from "./pages/admin/admin-dashboard";
import AdminProdutos from "./pages/admin/admin-produtos";
import AdminVendas from "./pages/admin/admin-vendas";
import AdminUsuarios from "./pages/admin/admin-usuarios";
import AdminPerfil from "./pages/admin/admin-perfil";
import AdminConfiguracao from "./pages/admin/admin-configuracao";
import NaoEncontrado from "./pages/not-found/nao-encontrado";
import SemAutorizacao from "./pages/sem-autorizacao/sem-autorizacao";
import ShoppingCheckout from "./pages/shopping/shopping-checkout";
import ShoppingHome from "./pages/shopping/shopping-home";
import ShoppingPerfil from "./pages/shopping/shopping-perfil";
import ShoppingCompras from "./pages/shopping/shopping-compras";
import ShoppingObrigado from "./pages/shopping/shopping-obrigado";
import ShoppingListagem from "./pages/shopping/shopping-listagem";

function App() {
  return (
    <div>
      <Routes>
        <Route path = 'auth'>
          <Route path = 'login' element = {<Login/>}/>
          <Route path = 'registro' element = {<Registro/>}/>
        </Route>
        <Route path = 'admin'>
          <Route path = 'dashboard' element = {<AdminDashboard/>}/>
          <Route path = 'produtos' element = {<AdminProdutos/>}/>
          <Route path = 'vendas' element = {<AdminVendas/>}/>
          <Route path = 'usuarios' element = {<AdminUsuarios/>}/>
          <Route path = 'perfil' element = {<AdminPerfil/>}/>
          <Route path = 'configuracao' element = {<AdminConfiguracao/>}/>   
        </Route>
        <Route path = 'shopping'>
          <Route path = 'perfil' element = {<ShoppingPerfil/>}/>
          <Route path = 'checkout' element = {<ShoppingCheckout/>}/>
          <Route path = 'compras' element = {<ShoppingCompras/>}/>
          <Route path = 'obrigado' element = {<ShoppingObrigado/>}/>
        </Route>

        <Route path = '/' element = {<ShoppingHome/>}/>
        <Route path = '*' element = {<NaoEncontrado/>}/>
        <Route path = 'listagens' element = {<ShoppingListagem/>}/>
        <Route path = 'nao-autorizado' element = {<SemAutorizacao/>}/>

      </Routes>
    </div>
  );
}

export default App