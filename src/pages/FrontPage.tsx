import React from "react";
import styles from "./FrontPage.module.css";

const FrontPage: React.FC = () => {
  return (
    <div>
      <div className={styles.bgSec}>
        <div className={styles.coverImg}>
          <h2 className={styles.title}>
            Watch movies or any videos with your friends!
          </h2>
          <p className={styles.des}>In 4 easy steps...</p>
        </div>
      </div>

      <div className={styles.stepSec}>
        <div className={styles.step}>1. Upload Video</div>

        <div className={styles.step}>2. Create Room</div>

        <div className={styles.step}>3. Invite Friends</div>

        <div className={styles.step}>4. Enjoy!</div>
      </div>
    </div>
  );
};

export default FrontPage;
