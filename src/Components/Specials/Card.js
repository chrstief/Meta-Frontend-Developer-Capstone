import styles from './Card.module.css';
import { Link } from "react-router-dom";
import basketIcon from '../../Assets/Basket.svg'

export default function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <div>
          <h2 className={`cardTitle ${styles.cardTitle}`}>
            {props.name}
            <span className={`cardTitle ${styles.cardPrice}`}>{props.price}</span>
          </h2>
          <p className='paragraphText'>{props.description}</p>
        </div>
        <Link to="/" className={`cardTitle link ${styles.order}`}>
          <span>Order for delivery</span>
          <img src={basketIcon} alt="Basket" />
        </Link>
      </div>
    </div>
  );
}