import { Link } from 'react-router-dom';
import styles from './MainBtn.module.css';

function MainBtn({ children, linkTo }) {
  return (
    <div>
      <Link to={linkTo} className={styles.heroButton}>
        {children}
      </Link>
    </div>
  );
}

export default MainBtn;
