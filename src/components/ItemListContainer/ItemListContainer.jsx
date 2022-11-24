import ItemCard from "./ItemCards";
import DefaultImg from '../../assets/images/default/notFound.png'

function ItemListContainer () {
    return(
        <main className="my-5">
            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                        <ItemCard
                        id = {1}
                        nombre = "Tornillos"
                        precio = {200}
                        img = { DefaultImg }
                        />
                        <ItemCard
                        id = {2}
                        nombre = "Tornillos"
                        precio = {200}
                        img = { DefaultImg }
                        />
                        <ItemCard
                        id = {3}
                        nombre = "Tornillos"
                        precio = {200}
                        img = { DefaultImg }/>
                        <ItemCard
                        id = {4}
                        nombre = "Tornillos"
                        precio = {200}
                        img = { DefaultImg }/>
                        <ItemCard
                        id = {5}
                        nombre = "Tornillos"
                        precio = {200}
                        img = { DefaultImg }/>
                        <ItemCard
                        id = {6}
                        nombre = "Tornillos"
                        precio = {200}
                        img = { DefaultImg }/>
                        <ItemCard
                        id = {7}
                        nombre = "Tornillos"
                        precio = {200}
                        img = { DefaultImg }/>
                        <ItemCard
                        id = {8}
                        nombre = "Tornillos"
                        precio = {200}
                        img = { DefaultImg }/>
                        <ItemCard
                        id = {9}
                        nombre = "Tornillos"
                        precio = {200}
                        img = { DefaultImg }/>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default ItemListContainer