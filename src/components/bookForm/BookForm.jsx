import { useState } from 'react';
import styles from './BookForm.module.css';
import { toast } from 'react-hot-toast';

function BookForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form data:', formData);
    setFormData({
      name: '',
      email: '',
      bookingDate: '',
      comment: '',
    });
    e.target.reset();
    toast.success('Booking request sent successfully!', {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Book your campervan now</h1>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <input
          type="date"
          name="bookingDate"
          placeholder="Booking date*"
          onChange={handleChange}
          required
          className={styles.input}
        />

        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          className={styles.textarea}
        />

        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
}

export default BookForm;
