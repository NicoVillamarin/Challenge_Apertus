import PropTypes from 'prop-types';
import '../App.css'

function Card({ product, onDelete }) {

  // La logica de este componete, es renderizar una card, con todas las descripciones que nos proporciona la API
  // Usando la Props de product y onDelete, la cual la misma logica se encuentra en App.jsx
  
  return (
    <div className="card card_product">
      <img src={product.image} alt={product.title} className="card-img-top img_product" />

      <div className="card-body bg-light">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Precio: {product.price} USD</p>
        <p className="card-text">Categoría: {product.category}</p>
        <button onClick={() => onDelete(product.id)} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string, // Opcional
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default Card;