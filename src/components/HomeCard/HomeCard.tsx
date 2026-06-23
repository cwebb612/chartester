import styles from './HomeCard.module.css';
import { Link } from 'react-router-dom';
import NavArrow from '../NavArrow/NavArrow';

interface HomeCardProps {
  title: string;
  description: string;
  destinationRoute: string;
}

function HomeCard({
  title,
  description,
  destinationRoute,
}: HomeCardProps) {
  return (
  <Link to={destinationRoute} className={styles["home-card-container"]}>
    <div className={styles["card-title"]}>
      {title}
    </div>
    <div className={styles["description-container"]}>
      {description}
      <NavArrow direction='forward' size="1rem"/>
    </div>
  </Link>
  );
}

export default HomeCard;
