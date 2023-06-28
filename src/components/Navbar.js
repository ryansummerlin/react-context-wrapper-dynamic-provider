import horoscopeObj from '../data/horoscopes';
import { HoroscopeContext } from '../context/HoroscopeContext';
import { useContext } from 'react';

const Navbar = () => {
  console.log('navBar rendering');
  const { setCurrentSign } = useContext(HoroscopeContext);
  const horoscopes = Object.keys(horoscopeObj);
  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign} onClick={e => setCurrentSign(sign)}>{sign}</span>
      ))}
    </nav>
  );
};

export default Navbar;
