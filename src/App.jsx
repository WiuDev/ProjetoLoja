import "./App.css"
import Login from "./pages/auth/login";
import { Routes, Route } from "react-router-dom";
import Registro from "./pages/auth/registro";

function App() {
  return (
    <div>
      <Routes>
        <Route path = 'auth'>
          <Route path = 'login' element = {<Login/>}/>
          <Route path = 'registro' element = {<Registro/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App