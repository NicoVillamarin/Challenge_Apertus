import PropTypes from 'prop-types';

function Category({ categories, onChange }) {

    //La funcion de este componente, es renderizar las categorias para filtrarlas segun la opcion que se seleccione.
    //A traves de Props, traemos la informacion de categories y onChange, la cual toda la logica se encuentra en App.jsx

    const handleCategoryChange = (selectedCategory) => {
        if (selectedCategory === 'Todas las categorías') {
            onChange("");
        } else {
            onChange(selectedCategory);
        }
    };
    return (
        <div>
            <div>
                <label>Filtrar por Categoría:</label>
                <select onChange={(e) => handleCategoryChange(e.target.value)}>
                    <option value="">Todas las categorías</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}


Category.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Category;