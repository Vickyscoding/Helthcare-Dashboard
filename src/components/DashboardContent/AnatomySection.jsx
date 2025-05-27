
import styles from "./AnotomySection.module.css";

const AnatomySection = () => {
  return (
    <div className={styles.anatomySection}>
      <h3 className={styles.title}>Dashboard</h3>
      <div className={styles.imageWrapper}>
        <img src="/humananotomy.jpeg" alt="Human Body" className={styles.image} />

        {/* Health indicators */}
        <div className={`${styles.indicator} ${styles.heart}`}>❤️ Healthy Heart</div>
        <div className={`${styles.indicator} ${styles.lungs}`}>🫁 Lungs - Issue</div>
        <div className={`${styles.indicator} ${styles.bone}`}>🦴 Bone - Normal</div>
      </div>
    </div>
  );
};

export default AnatomySection;
