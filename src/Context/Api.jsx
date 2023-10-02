import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const ApiContext = React.createContext();

// Creamos como context a useApi, donde va a pasar toda la informacion y funciones a los componentes para poder renderizar.
// eslint-disable-next-line react-refresh/only-export-components
export function useApi() {
    return useContext(ApiContext);
}

export function ApiProvider({ children }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // En el hook useEffect hacemos la llamada a la API recibiendo toda la informacion
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setData([...data]);
                setLoading(false);
            })
            .catch((error) => console.log("Error fetching data:", error));
    }, []);

    // Esta funcion lo que va hacer es llevar la logica para poder utilizar el boton de eliminar item
    const handleDeleteProduct = (productId) => {
        const updatedProducts = data.filter((product) => product.id !== productId);
        setData(updatedProducts);
    };

    // La funcion de este array, es hacer un map recibiendo todas las categorias
    const uniqueCategories = [...new Set(data.map((product) => product.category))];

    return (
        // Dentro de ApiContext.Provider, se encuentra los props, que van a ser recibidos en los componentes, para poder utilizar sus logicas.
        <ApiContext.Provider value={{ products: data, loading, handleDeleteProduct, uniqueCategories }}>
            {children}
        </ApiContext.Provider>
    );
}


ApiProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ApiProvider;


