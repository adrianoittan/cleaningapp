import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Specialized Services <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We believe in the power of a pristine environment to elevate your surroundings and uplift your spirits. At Dust Buster Cleaning Crew, we go beyond mere cleaning – we specialize in creating captivating spaces that inspire and invigorate.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src="https://coterieinsurance.com/wp-content/uploads/2023/10/Pressure-Washing.png" alt="billing" className="w-[100%] h-[100%] rounded-xl shadow-sm" />
    </div>
  </section>
);

export default CardDeal;