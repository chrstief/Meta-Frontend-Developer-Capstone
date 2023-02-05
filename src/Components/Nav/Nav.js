import styles from './Nav.module.css';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
        <ul className={styles.ul}>
            <li>
                <Link className={styles.a} to="/">Home</Link>
            </li>
            <li>
                <Link className={styles.a} to="/">About</Link>
            </li>
            <li>
                <Link className={styles.a} to="/">Menu</Link>
            </li>
            <li>
                <Link className={styles.a} to="/">Reservations</Link>
            </li>
            <li>
                <Link className={styles.a} to="/BookingPage">Order Online</Link>
            </li>
            <li>
                <Link className={styles.a} to="/">Login</Link>
            </li>
        </ul>
    </nav>
  )
}
