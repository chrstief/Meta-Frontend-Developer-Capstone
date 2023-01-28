import React from 'react'
import logo from './Logo.svg';

export default function Footer() {
  return (
    <footer>
        <img src={logo} alt='Logo'/>
        <div>
            <h3>Doormat Navigation</h3>
            <ul>
                <li>
                    <a href='#Home'>Home</a>
                </li>
                <li>
                    <a href='#About'>About</a>
                </li>
                <li>
                    <a href='#Menu'>Menu</a>
                </li>
                <li>
                    <a href='#Reservations'>Reservations</a>
                </li>
                <li>
                    <a href='#Order_Online'>Order Online</a>
                </li>
                <li>
                    <a href='#Login'>Login</a>
                </li>
            </ul>
        </div>
        <div>
            <h3>Contact Details</h3>
            <ul>
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
            <ul>
                <li>
                    <a href='https://www.facebook.com/'>Facebook</a>
                </li>
                <li>
                    <a href='https://www.instagram.com/'>Instagram</a>
                </li>
                <li>
                    <a href='https://twitter.com/'>Twitter</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}
