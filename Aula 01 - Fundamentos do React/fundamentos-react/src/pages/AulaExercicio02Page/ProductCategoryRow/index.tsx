import { IProduct } from "../../../types/Product"

interface IProps {
    product: IProduct;
}

export function ProductCategoryRow(props: IProps) {
    return (
        <tr>
            <th colSpan={2}>{props.product.category}</th>
        </tr>
    )
}