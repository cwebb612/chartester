import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles["about-background"]}>
      <div className={styles["about-container"]}>

        <div className={styles["about-title"]}>About Me</div>
        <p className={styles["about-description"]}>Software Engineer at The Home Depot.</p>

        <div className={styles["about-sub-title"]}>Experience</div>
        <ul className={styles["about-list"]}>
          <li>The Home Depot, Atlanta, GA
            <ul className={styles["about-list"]}>
              <li>Software Engineer II (July 2024 - Present)</li>
              <li>Order Fulfillment Associate (January - May 2024)</li>
              <li>Software Engineer Intern (May - July 2023)</li>
            </ul>
          </li>
          <li>Bend Health
            <ul className={styles["about-list"]}>
              <li>Software Engineer (May - December 2022)</li>
            </ul>
          </li>
        </ul>

        <div className={styles["about-sub-title"]}>Education</div>
        <ul className={styles["about-list"]}>
          <li>University of Michigan, Class of 2024
            <ul className={styles["about-list"]}>
              <li>B.S. Computer Science and Cognitive Science</li>
              <li>GO BLUE!</li>
            </ul>
          </li>
        </ul>

        <div className={styles["about-sub-title"]}>Skills</div>
        <div className={styles["about-skills"]}>
          <Link to={"/dev"} className={styles["link"]}>
            Go see for yourself
          </Link>
        </div>

      </div>
    </div>
  )
}
