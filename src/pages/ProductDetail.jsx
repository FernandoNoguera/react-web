import {
    useParams
} from 'react-router-dom';
import React, { useEffect,useState } from "react";
import axios from "axios";



function ProductDetail (){
    const { id } = useParams(); 
    const [data, setData] = useState(null)
    

    useEffect( () => {
        const instance = axios.create({
            baseURL: 'https://dummyjson.com/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        instance.get(`products/${id}`)
        .then(
            (data) => {
            setData(data.data)
        }
        ).catch((error) => {
            console.log(error);
        })
    },[])
    
    if (!data) return null;
    return(
        <>
            <div className="container my-5">
                <div className="card details-card p-0">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <img className="img-fluid details-img" src="https://source.unsplash.com/5Tm4YRqnNcM" alt={data.title}/>
                        </div>
                        <div className="col-md-6 col-sm-12 description-container p-5">
                            <div className="main-description">
                                <p className="product-category mb-0">{data.brand}</p>
                                <h3>{data.title}</h3>
                                <hr/>
                                <p className="product-price">${data.price}</p>
                                <form className="add-inputs">

                                    <button name="add_to_cart" type="submit" className="price_tag ">Agregar</button>
                                </form>
                                <br/>
                                <br/>
                                <hr/>
                                <p className="product-title mt-4 mb-1">Descripción</p>
                                <p className="product-description mb-4">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail