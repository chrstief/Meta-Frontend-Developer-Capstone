import styles from './About.module.css';
import MarioAndAdrian from '../../Assets/Mario and Adrian A.jpg'

export default function About() {
  return (
      <div className={`container ${styles.grid}`}>
        <div>
          <h1 className={`displayTitle ${styles.heading}`}>Little Lemon</h1>
          <h2 className={`subTitle ${styles.subHeading}`}>Chicago</h2>
          <p className={`leadText ${styles.text}`}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        </div>
        <img src={MarioAndAdrian} alt="Mario and Adrian" className={styles.image}/>
      </div>
  )
}