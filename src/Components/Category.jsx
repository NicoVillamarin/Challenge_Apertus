import { useApi } from '../Context/Api'
import { useState } from 'react';
import PropTypes from 'prop-types'

function Category({ onCategoryChange }) {

    // Llamamos a uniqueCategories, en la cual ese dato se encuentra en el context
    const { uniqueCategories } = useApi();
    const [selectedCategory, setSelectedCategory] = useState('');

    // Creamos un evento que lo que va hacer, es a la hora de seleccionar una categoria, va crear un evento para poder mostrar la categoria seleccionada.
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        onCategoryChange(category);
    };


    return (
        <select className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Todas las Categorías</option>
            {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
}
Category.propTypes = {
    onCategoryChange: PropTypes.func.isRequired,
};

export default Category;