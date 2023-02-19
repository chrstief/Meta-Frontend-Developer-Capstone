import styles from './Nav.module.css';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
        <ul className={styles.ul}>
            <li>
                <Link className={`${styles.a} link link cardTitle`} to="/">Home</Link>
            </li>
            <li>
                <Link className={`${styles.a} link cardTitle`} to="/">About</Link>
            </li>
            <li>
                <Link className={`${styles.a} link cardTitle`} to="/">Menu</Link>
            </li>
            <li>
                <Link className={`${styles.a} link cardTitle`} to="/">Reservations</Link>
            </li>
            <li>
                <Link className={`${styles.a} link cardTitle`} to="/BookingPage">Order Online</Link>
            </li>
            <li>
                <Link className={`${styles.a} link cardTitle`} to="/">Login</Link>
            </li>
        </ul>
    </nav>
  )
}
