import styles from './Home.module.css';
import HomeCard from "../components/HomeCard/HomeCard"

export default function Home() {
  return <div className={styles["home-container"]}>

    <div className={styles["big-title"]}>Charlie Webb</div>

    <div className={styles["nav-container"]}>
      <HomeCard
        title="Dev Work"
        description="A bunch of cool projects n stuff"
        destinationRoute="/dev"
      />
      <HomeCard
        title="Photography"
        description="Catching light and stuff bod"
        destinationRoute="/photos"
      />
    </div>
    <div>About</div>
    <div>Contact</div>
    <div>Footer</div>
  </div>;
}
