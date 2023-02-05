import React from 'react'
import RestaurantFood from '../../Assets/restauranfood.jpg'

function Hero() {
  return (
    <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <img src={RestaurantFood} alt="Restaurant Food"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>Reserve a Table</button>
    </section>
  )
}

export default Hero