const ItemDetail = ({productos}) => {
    return (
        <div>
        <div className="tituloDelProducto">{productos.title}</div>
        <div className="contenedorImagenDescripción">
            <img className="imagenDelProducto" src={productos.image} alt={productos.title} />
            <div className="descripcionDelProducto">{productos.description}</div>
        </div>
        <div className="contenedorBotonComprar">
            <button class="botonComprar">Comprar {productos.price}</button>
        </div>
        </div>
        
        
    )
}

export default ItemDetail