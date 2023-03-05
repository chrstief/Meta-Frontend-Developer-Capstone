import styles from './Testimonial.module.css';

export default function Testimonial(props) {
  return (
    <div className={styles.card}>
        <h2 className={`sectionCategories ${styles.rating}`}>{props.rating}</h2>
        <div className={styles.flexbox}>
            <img src={props.image} alt={props.name} className={styles.avatar} />
            <h2 className={`sectionCategories ${styles.cardTitle}`}>{props.name}</h2>
        </div>
        <p className='paragraphText'>{props.description}</p>
    </div>
  );
}