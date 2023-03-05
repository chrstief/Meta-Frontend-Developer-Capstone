import Testimonial from "./Testimonial"
import styles from "./Testimonials.module.css"

export default function Testimonials() {
  return (
    <div className={`container ${styles.container}`}>
      <h1 className={`subTitle ${styles.heading}`}>Testimonials</h1>
      <div className={styles.grid}>
        <Testimonial image="https://i.pravatar.cc/150?img=10" name="Angela" rating="★★★★" description={`"Little Lemon has the best lemon chicken I've ever tasted!"`} />
        <Testimonial image="https://i.pravatar.cc/150?img=11" name="Hans" rating="★★★★★" description={`"The cozy atmosphere and friendly staff at Little Lemon make every visit feel like coming home."`} />
        <Testimonial image="https://i.pravatar.cc/150?img=5" name="Lisa" rating="★★★★★" description={`"If you're looking for delicious food at a reasonable price, Little Lemon is the place to be."`} />
        <Testimonial image="https://i.pravatar.cc/150?img=16" name="Ann" rating="★★★★" description={`"Little Lemon's rustic charm and fantastic dishes are a winning combination."`} />
      </div>
    </div>
  )
}
