import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ campers }) => {
  return (
    <div className={styles.productList}>
      {campers.map(camper => (
        <ProductCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default ProductList;
