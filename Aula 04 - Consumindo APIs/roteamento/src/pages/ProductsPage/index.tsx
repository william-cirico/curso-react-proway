import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function ProductsPage() {
    const { productId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [filterName, setFilterName] = useState("");
    const [products, setProducts] = useState([
        { id: 1, name: "caderno" },
        { id: 2, name: "livro" },
    ]);

    const filterProducts = (name: string) => products.filter(product => product.name.includes(name));    

    useEffect(() => {
        const name = searchParams.get("nome");

        if (name) {
            setFilterName(name);
        }
    }, []);

    return (
        <>
            <div>Produto: {productId}</div>
            {
                filterProducts(filterName).map(product => (
                    <p key={product.id}>{product.name}</p>
                ))
            }
        </>
    );
}