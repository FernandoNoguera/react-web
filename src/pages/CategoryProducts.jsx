import ItemListContainerFilter from "../components/ItemListContainerFilter/ItemListContainerFilter"
import { useParams } from "react-router-dom";

function CategoryProducts (){
    const { name } = useParams(); 
    return(
        <ItemListContainerFilter
            category = {name}
        />
    )
}

export default CategoryProducts