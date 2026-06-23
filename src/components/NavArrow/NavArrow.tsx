import { useNavigate } from 'react-router-dom';
import styles from './NavArrow.module.css';

type NavArrowProps = {
  direction: 'back' | 'forward';
  to?: string;
  size?: string;
};

export default function NavArrow({ direction, to, size = '2rem' }: NavArrowProps) {
  const navigate = useNavigate();
  const src = direction === 'back' ? '/Back_Arrow.png' : '/Forward_Arrow.png';
  const alt = direction === 'back' ? 'Go back' : 'Go forward';

  function handleClick() {
    if (to) {
      navigate(to);
    }
  }

  return (
    <button className={styles.arrow} onClick={handleClick}>
      <img src={src} alt={alt} className={styles.arrowImg} style={{ height: size }} />
    </button>
  );
}
