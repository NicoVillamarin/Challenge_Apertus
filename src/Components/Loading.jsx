//El componente Loading, su unica funcion es motrar un spinner para cuando la informacion de Products no este cargado aun
const Loading = () => {
    return (
        <div className="container_spinner">
            <h2>Cargando...</h2>
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading