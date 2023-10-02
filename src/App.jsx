import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApiProvider } from './Context/Api';
import Products from './Components/Products.jsx'
import ProductsDetail from './Components/ProductsDetail.jsx'

function App() {

  return (
    <>
    {/* En App podemos visualizar las rutas utilizando React-router marcando "/" en la ruta principal que seria como el index */}
      <BrowserRouter>
      {/* La funcion ApiProvider lo traemos de Api.jsx, en la cual contiene toda la logica y el llamado de la APi*/}
        <ApiProvider>
          <Routes>
            <Route path="/" element={<Products />}/>
            <Route path='/product/:id' element={<ProductsDetail />} />
          </Routes>
        </ApiProvider>
      </BrowserRouter>
    </>
  )
}

export default App
