import styles from './HomeCard.module.css';
import { Link } from 'react-router-dom';

interface HomeCardProps {
  title: string;
  description: string;
  cta?: string;
  destinationRoute: string;
}

function HomeCard({
  title,
  description,
  cta = "Explore",
  destinationRoute,
}: HomeCardProps) {
  return (
  <Link to={destinationRoute} className={styles["home-card-container"]}>
    <div className={styles["card-title"]}>
      {title}
    </div>
    <div>
      {description}
    </div>
    <div>
      {cta} {"->"}
    </div>
  </Link>
  );
}

export default HomeCard;
