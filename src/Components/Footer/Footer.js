import logoLarge from '../../Assets/LogoLarge.png';
import styles from './Footer.module.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={`container ${styles.grid}`}>
        <img src={logoLarge} width='70px' alt='Logo'/>
        <div>
            <h3>Doormat Navigation</h3>
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
        </div>
        <div>
            <h3>Contact Details</h3>
            <ul className={styles.ul}>
                <li>
                    Address
                </li>
                <li>
                    Phone Number
                </li>
                <li>
                    Email
                </li>
            </ul>
        </div>
        <div>
            <h3>Social Media Links</h3>
            <ul className={styles.ul}>
                <li>
                    <a className={styles.a} href='https://www.facebook.com/'>Facebook</a>
                </li>
                <li>
                    <a className={styles.a} href='https://www.instagram.com/'>Instagram</a>
                </li>
                <li>
                    <a className={styles.a} href='https://twitter.com/'>Twitter</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
