import styles from './FeatureBadge.module.css';
import { icons } from '../../assets/icons';

const FeatureBadge = ({ iconName, text }) => {
  return (
    <div className={styles.badge}>
      <span className={styles.icon}>
        <img src={icons[iconName]} alt={text} />
      </span>
      <span className={styles.text}>
        {text.charAt(0).toUpperCase() + text.slice(1)}
      </span>
    </div>
  );
};

export default FeatureBadge;
