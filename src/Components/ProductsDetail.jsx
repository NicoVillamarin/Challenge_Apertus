import { Link, useParams } from 'react-router-dom';
import { useApi } from '../Context/Api'; // Asegúrate de tener la ruta correcta a tu contexto
import Loading from './Loading'

const ProductsDetail = () => {
    const { id } = useParams();
    const { products, loading, handleDeleteProduct } = useApi();

    // Encuentra el producto con el ID proporcionado
    const product = products.find((product) => product.id === parseInt(id, 10));


    if (loading) {
        return <Loading />;
    }

    if (!product) {
        return (
            <>
                <Link to={"/"}>
                    <button className='btn btn_back'>Atras</button>
                </Link>
                <div className='text-center fs-1 fw-bold'>Producto no encontrado</div>
            </>
        )
            ;
    }

    // Muestra los detalles del producto
    return (
        <>
            <Link to={"/"}>
                <button className='btn btn_back'>Atras</button>
            </Link>
            <div className='container_detail'>
                <div className="card">
                    <div className="card-body">
                        <img src={product.image} className="card-img-top" alt={product.title} />
                        <h5 className="card-title"><span>Nombre:</span> {product.title}</h5>
                        <p className="card-text"><span>Categoria: </span>{product.category}</p>
                        <p className="card-text"><span>Descripcion: </span><br />{product.description}</p>
                        <p className="card-text"><span>Precio:</span>${product.price} USD</p>
                        <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsDetail;