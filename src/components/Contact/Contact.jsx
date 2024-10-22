import styles from './Contact.module.css';

const Contact = ({ name, phone, onDelete }) => {
  return (
    <div className={styles.contactCard}>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <span className={styles.icon}>👤</span>
          <h2>{name}</h2>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.icon}>📞</span>
          <p>{phone}</p>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
