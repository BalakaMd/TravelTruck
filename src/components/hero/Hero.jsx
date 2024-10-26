import MainBtn from '../mainBtn/MainBtn';
import styles from './Hero.module.css';
import heroBackgroundImage from '/src/assets/hero_main.png';

function Hero() {
  return (
    <div className={styles.hero}>
      <div
        className={styles.heroBackground}
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
        }}
      />
      <div className={styles.heroContent}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h2 className={styles.heroTitle}>Campers of your dreams</h2>
            <p className={styles.heroDescription}>
              You can find everything you want in our catalog.
            </p>
            <MainBtn linkTo="/catalog">View Now</MainBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
