import Hero from '../../components/hero/Hero';
import Navigation from '../../components/navigation/Navigation';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <Hero />
    </div>
  );
};

export default HomePage;
