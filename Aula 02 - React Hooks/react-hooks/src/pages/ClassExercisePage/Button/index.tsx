import styles from "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type IProps = {
    icon: any;
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export function Button(props: IProps) {
    return (
        <button style={{ backgroundColor: props.color }} className={styles.button} onClick={props.onClick}>
            <FontAwesomeIcon icon={props.icon} color="#fff" />
            { props.children }
        </button>
    );
}

