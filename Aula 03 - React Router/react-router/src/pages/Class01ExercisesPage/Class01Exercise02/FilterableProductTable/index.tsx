import { useState } from "react";
import { IProduct } from "../../types/Product";
import { ProductTable } from "../ProductTable";
import { SearchBar } from "../SearchBar";

interface IProps {
    products: IProduct[];
}

export function FilterableProductTable({ products }: IProps ) {    
    const [inStockOnly, setInStockOnly] = useState(true);
    const [filterText, setFilterText] = useState("");

    function toggleStock() {
        setInStockOnly(prevState => !prevState)
    }

    return (
        <div>
            <SearchBar 
                filterText={filterText} 
                inStockOnly={inStockOnly} 
                toggleStock={toggleStock} 
                setFilterText={setFilterText} />
            <ProductTable 
                products={products} 
                isInStockOnly={inStockOnly} 
                filterText={filterText} />           
        </div>
    );
}