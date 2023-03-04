import styles from './Hero.module.css';
import RestaurantFood from '../../Assets/restauranfood.jpg'
import Button from "../Button/Button";

export default function Hero() {
  return (
    <section className={styles.heroBackground}>
      <div className={`container ${styles.grid}`}>
        <div>
          <h1 className={`displayTitle ${styles.heading}`}>Little Lemon</h1>
          <h2 className={`subTitle ${styles.subHeading}`}>Chicago</h2>
          <p className={`leadText ${styles.text}`}>We are a family owned Mediteranian restaurant, focused on traditional recipies served with a modern twist.</p>
          <div>
            <Button to="/BookingPage">Reserve a Table</Button>
          </div>
        </div>
        <img src={RestaurantFood} alt="Restaurant Food" className={styles.heroImage}/>
      </div>
    </section>
  )
}