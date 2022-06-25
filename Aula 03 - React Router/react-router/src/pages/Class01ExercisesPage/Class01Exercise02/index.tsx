import { FilterableProductTable } from "./FilterableProductTable";

const productList = [
    { id: 1, category: "Sporting Goods", name: "Football", price: 49.99, stocked: true },
    { id: 2, category: "Sporting Goods", name: "Baseball", price: 9.99, stocked: true },
    { id: 3, category: "Sporting Goods", name: "Basketball", price: 29.99, stocked: false },
    { id: 4, category: "Electronics", name: "IPod Touch", price: 99.99, stocked: true },
    { id: 5, category: "Electronics", name: "iPhone 5", price: 399.99, stocked: false },
    { id: 6, category: "Electronics", name: "Nexus 7", price: 199.99, stocked: true },
];

export function Class01Exercise02() {
    return (
        <>
            <FilterableProductTable products={productList} />
        </>
    );
}