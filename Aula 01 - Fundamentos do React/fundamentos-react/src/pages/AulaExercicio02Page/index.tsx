import { FilterableProductTable } from "./FilterableProductTable";

const productList = [
    { category: "Sporting Goods", name: "Football", price: 49.99, stocked: true },
    { category: "Sporting Goods", name: "Baseball", price: 9.99, stocked: true },
    { category: "Sporting Goods", name: "Basketball", price: 29.99, stocked: false },
    { category: "Electronics", name: "IPod Touch", price: 99.99, stocked: true },
    { category: "Electronics", name: "iPhone 5", price: 399.99, stocked: false },
    { category: "Electronics", name: "Nexus 7", price: 199.99, stocked: true },
];

export function AulaExercicio02Page() {
    return (
        <>
            <FilterableProductTable products={productList} />
        </>
    );
}