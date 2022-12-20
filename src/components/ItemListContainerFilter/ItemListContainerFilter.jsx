import ItemCard from "../ItemListContainer/ItemCards";
// import DefaultImg from '../../assets/images/default/notFound.png';
import React, { useEffect , useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";



function ItemListContainerFilter (props) {
    const localCategory = props.category;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect( () => {
        const instance = axios.create({
            baseURL: 'https://dummyjson.com/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        instance.get(`products/category/${localCategory}`)
            .then(
                (data) => {
                setData(data?.data?.products);
                setLoading(false);
            }
            ).catch((error) => {
            }) 
        
    },[])
    if (!data) return [];
    return(
        <main className="my-5">
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        { loading ? <Loader/> :
                            <>
                                {data.map(product => (
                                    <ItemCard
                                    key={product.id}
                                    id={product.id}
                                    nombre = {product.title}
                                    precio = {product.price}
                                    img = {product.images[0]}
                                />
                                ))}
                            </>
                        }     
                    </div>
                </div>
            </div>
        </main>
    );
}
export default ItemListContainerFilter