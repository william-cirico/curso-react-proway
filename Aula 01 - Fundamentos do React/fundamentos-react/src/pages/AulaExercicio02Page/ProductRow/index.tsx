import { IProduct } from "../../../types/Product";
import styles from "./ProductRow.module.css";

interface IProps {
    product: IProduct;
}

export function ProductRow(props: IProps) {
    const style = !props.product.stocked ? styles.red : "";

    return (<tr>
        {/* CSS Inline */}
        {/* <td style={!props.product.stocked ? { color: "red" } : {}}>{props.product.name}</td> */}
        <td className={style}>{props.product.name}</td>
        <td>{props.product.price}</td>
    </tr>)
}