import React from 'react'
import logoLarge from './LogoLarge.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <img src={logoLarge} alt='Logo'/>
        <div>
            <h3>Doormat Navigation</h3>
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
