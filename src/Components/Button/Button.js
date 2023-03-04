import styles from './Button.module.css';
import { Link } from "react-router-dom";

export default function Button(props) {
    return (
        <Link to={props.to} className={`${styles.button} link cardTitle`}>{props.children}</Link>
    );
  }