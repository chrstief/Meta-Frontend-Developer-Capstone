import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav>
        <ul className={styles.ul}>
            <li>
                <a className={styles.a} href='#Home'>Home</a>
            </li>
            <li>
                <a className={styles.a} href='#About'>About</a>
            </li>
            <li>
                <a className={styles.a} href='#Menu'>Menu</a>
            </li>
            <li>
                <a className={styles.a} href='#Reservations'>Reservations</a>
            </li>
            <li>
                <a className={styles.a} href='#Order_Online'>Order Online</a>
            </li>
            <li>
                <a className={styles.a} href='#Login'>Login</a>
            </li>
        </ul>
    </nav>
  )
}
