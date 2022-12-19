import { Link } from "react-router-dom";

function ItemCard (props) {
    return(
        <div className="col-md-5 col-lg-3 my-3">
            <div id={props.id} className="d-flex justify-content-center">      
                <img className="item_card" src={ props.img } alt={props.nombre}/>
            </div>
            <Link to={`/detalle/${props.id}`}>
                <p className="text-center">{props.nombre}</p>
            </Link>
            <h5 className="text-center">$ {props.precio}</h5>
            <div className="d-flex justify-content-center">
                <input id={props.id} data-id={props.id} className="price_tag" type="button" value="Agregar"/>
            </div>
        </div>
    );
}
export default ItemCard
