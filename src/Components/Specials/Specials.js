import styles from './Specials.module.css';
import Button from "../Button/Button";
import Card from './Card';
import GreekSalad from '../../Assets/greek salad.jpg'
import Bruschetta from '../../Assets/bruchetta.svg'
import LemonDesert from '../../Assets/lemon dessert.jpg'

export default function Specials() {
  return (
    <div className='container'>
      <div className={styles.flexbox}>
        <h1>This weeks specials!</h1>
        <Button to="/">Online Menu</Button>
      </div>
      <div className={styles.grid}>
        <Card
          name="Greek Salad"
          price="$12.99"
          image={GreekSalad}
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <Card
          name="Bruschetta"
          price="$5.99"
          image={Bruschetta}
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <Card
          name="Lemon Desert"
          price="$5.00"
          image={LemonDesert}
          description="This comes straight from grandma's recipe book, every last ingredient has bee sourced and is as authentic as can be imagined."
        />
      </div>
    </div>
  );
}
