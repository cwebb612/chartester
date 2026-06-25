import styles from './Home.module.css';
import HomeCard from "../components/HomeCard/HomeCard"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

const devCardDescription =
  "Active documentation for all software related work " +
  "including this website. " +
  "Projects, tinkering, and tutorials where possible. " +
  "Lots of self development along the way.";

const photographyCardDescription =
  "Just catching light and stuff as a hobby. " +
  "Some cool pictures here. "

export default function Home() {
  return <div className={styles["home-container"]}>

    <div className={styles["big-title"]}>Charlie Webb</div>

    <div>Portfolios</div>

    <div className={styles["nav-container"]}>
      <HomeCard
        title="Development"
        description={devCardDescription}
        destinationRoute="/dev"
      />
      <HomeCard
        title="Photography"
        description={photographyCardDescription}
        destinationRoute="/photos"
      />
    </div>
    <About />
    <Contact />
    <Footer />
  </div>;
}
