import { useState, useEffect } from 'react';
import './App.css'
import Card from './Components/Card';
import Category from './Components/Category';


function App() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');

  // A traves del Hook useEffect(), realizamos la llamada de la API a traves de fetch. Y realizamos un mapeo sobre las categorias que se encuentra en ellas.

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  //Construimos una logica para poder filtrar las categorias, utilizando operario ternario.
  const filteredProducts = categoryFilter
    ? products.filter((product) => product.category === categoryFilter)
    : products;

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  //Creamos un evento para poder eliminar el producto a traves de .filter
  
  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <>
      <div className="App_container">
        <h1 className='Title'>Lista de productos</h1>
        <Category categories={categories} onChange={handleCategoryFilter} />
        <div className='container_products'>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <Card product={product} onDelete={handleDeleteProduct} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
