import logoLarge from '../../Assets/LogoLarge.png';
import styles from './Footer.module.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={`container paragraphText ${styles.grid}`}>
        <img  className={styles.logoLarge} src={logoLarge} alt='Logo'/>
        <div>
            <ul className={styles.ul}>
            <li>
                <Link className="link paragraphText" to="/">Home</Link>
            </li>
            <li>
                <Link className="link paragraphText" to="/">About</Link>
            </li>
            <li>
                <Link className="link paragraphText" to="/">Menu</Link>
            </li>
            <li>
                <Link className="link paragraphText" to="/">Reservations</Link>
            </li>
            <li>
                <Link className="link paragraphText" to="/BookingPage">Order Online</Link>
            </li>
            <li>
                <Link className="link paragraphText" to="/">Login</Link>
            </li>
            </ul>
        </div>
        <div>
            <ul className={styles.ul}>
                <li>
                    123 Main Street <br></br>
                    Anytown, USA 12345
                </li>
                <li>
                    (555) 555-1212
                </li>
                <li>
                    LittleLemon@gmail.com
                </li>
            </ul>
        </div>
        <div>
            <ul className={styles.ul}>
                <li><a className={`link paragraphText ${styles.socialMedia}`} href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook Logo"/>Facebook</a></li>
                <li><a className={`link paragraphText ${styles.socialMedia}`} href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png" alt="Instagram Logo"/>Instagram</a></li>
                <li><a className={`link paragraphText ${styles.socialMedia}`} href="https://twitter.com/" target="_blank" rel="noreferrer"><img src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png" alt="Twitter Logo"/>Twitter</a></li>
            </ul>
        </div>
    </footer>
  )
}
