import { useState } from 'react';
import '../App.css'
import { useApi } from '../Context/Api'
import Category from './Category';
import Loading from './Loading';
import { Link } from 'react-router-dom';

function Products() {

  //Traemos de context Api.jsx los valores products, loading y handleDeleteProduct
  const { products, loading, handleDeleteProduct } = useApi();
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }
  const filteredProducts = selectedCategory ? products.filter((product) => product.category === selectedCategory) : products;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='container'>
      <h1 className='text-center'>Challenge V2</h1>
      <div className="category_style">
        <Category onCategoryChange={handleCategoryChange} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  {/* A travez de Link, podemos ir al componente produtsDetail, para visualizar mas detalles */}
                  <Link to={`/product/${product.id}`} >
                    {product.title}
                  </Link>
                </td>
                <td className='price'>${product.price} USD</td>
                <td>{product.category}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );

}

export default Products;