import ItemCard from "./ItemCards";
// import DefaultImg from '../../assets/images/default/notFound.png';
import React, { useEffect, useState } from "react";
import axios from "axios";


function ItemListContainer () {
    const [data, setData] = useState([])
    const [listData, setListData] = useState([])
    useEffect( () => {
        const instance = axios.create({
            baseURL: 'https://dummyjson.com/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        instance.get(`products/`)
        .then(
    
            (data) => {
            setData(data.data.products)
        }
        ).catch((error) => {
            console.log(error);
        })
        instance.get(`products/categories`)
        .then(
            (data) => {
            setListData(data.data)
        }
        ).catch((error) => {
            console.log(error);
        })
    },[])
    if (!data) return [];
    if (!listData) return [];
    return(
        <main className="my-5">
            <div className="container">
                <div className="row">
                <div className="col-md-2">
                    <div className="row">
                    <ul class="list-group">
                        {listData.length > 0 && (
                            <>
                                {listData.map(el => (
                                    <li class="list-group-item">{el}</li>
                                ))}
                            </>
                        )} 
                    </ul>     
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="row">
                        {data.length > 0 && (
                            <>
                                {data.map(product => (
                                    <ItemCard
                                    key={product.id}
                                    id={product.id}
                                    nombre = {product.title}
                                    precio = {product.price}
                                    img = {product.thumbnail}
                                />
                                ))}
                            </>
                        )}        
                    </div>
                </div>

                </div>
            </div>
        </main>
    );
}
export default ItemListContainer