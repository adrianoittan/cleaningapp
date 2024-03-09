import { apple, bill, google} from "../assets";
import styles, { layout } from "../style";
import deepcleaning from '../assets/deepcleaning.webp';
import vacuum from '../assets/vacuum.jpg'
import movingout from '../assets/movingout.webp';

const Billing = () => (

  <section id="product" className={layout.sectionReverse}>
  
    <div className={layout.sectionImgReverse} >
    <img src={deepcleaning} alt="billing" className="w-[80%] h-[35%] relative z-[5] my-9 rounded-xl shadow-sm" />
    <br></br>
    <br></br>

      <img src={vacuum} alt="billing" className="w-[80%] h-[35%] relative z-[5] my-14 rounded-xl shadow-sm"/>
      <img src={movingout} alt="billing" className="w-[80%] h-[35%] relative z-[5] my-5 rounded-xl shadow-sm" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={`${layout.sectionInfo} min-h-500`}>
      <h2 className={styles.heading2}>
        Premium Cleaning <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🧹 Detailed Dusting and Vacuuming
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🍽️ Kitchen Cleaning
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🚽 Bathroom Cleaning
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🧼 Floor Care
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🪟 Window and Glass Cleaning
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🪣 Dusting and Cleaning of Fixtures and Surfaces
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      ⚙️ Appliance Cleaning
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🛋️ Furniture Cleaning
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🗑️ Trash Removal and Disposal
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🧼 Disinfection and Sanitization
      <br></br>
      <br></br>
      </p>
    <br></br>
      <h2 className={styles.heading2}>
        Signaure Cleaning <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🧹 Detailed Dusting and Vacuuming
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🍽️ Kitchen Cleaning including sink, backplash, cabinets, countertops, and appliances
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🚽 Bathroom Cleaning including shower, tub, toilets and sinks.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🛋️ Furniture Cleaning: Dust furniture
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🗑️ Trash Removal and Disposal
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 className={styles.heading2}>
        Move Out Cleaning <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🧹 Dust and wipe down all windows, blinds, surfaces, ceiling fans, baseboards,and corners.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🧼 Floor Care: Vacuum, sweep, and moap all floors.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🚽 Bathroom Cleaning: Clean and disinfect tub, shower, tile and grout, toilet, sinks, mirrors, counters, and fixtures.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      🍽️ Kitchen Cleaning: Clean exterior and interior of all kitchen appliances. Wipe down all kitchen countertops, backplashes, and cabinet doors.
      </p>
    
    </div>
  </section>
);
export default Billing;