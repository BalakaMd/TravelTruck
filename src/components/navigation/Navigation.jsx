import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './Navigation.module.css';

function Navigation() {
  const location = useLocation();

  const getLinkClassName = path => {
    const baseClass = `${styles.navLink} `;
    return (
      baseClass +
      (location.pathname === path
        ? styles.navLinkActive
        : styles.navLinkInactive)
    );
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="TravelTrucks" />
        </Link>{' '}
      </div>
      <div className={styles.linksContainer}>
        <Link to="/" className={getLinkClassName('/')}>
          Home
        </Link>
        <Link to="/catalog" className={getLinkClassName('/catalog')}>
          Catalog
        </Link>
      </div>
      <div className={styles.spacer}></div>
    </nav>
  );
}

export default Navigation;
