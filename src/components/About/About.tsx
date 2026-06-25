import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles["about-background"]}>
      <div className={styles["about-container"]}>
        <div className={styles["about-title"]}>
          About Me
        </div>

        <div className={styles["about-sub-title"]}>
          Education
        </div>

        <div className={styles["company-title"]}>
          University of Michigan Class '24
        </div>
        <ul>
          <li>
            B.S. Computer Science and Cognitive Science
          </li>
          <li>
            Blue Jitsu Club Member
          </li>
          <li>
            Theta Xi Fraternity
          </li>
        </ul>

        <div className={styles["about-sub-title"]}>
          Work Experience
        </div>
        <div className={styles["meat-container"]}>

          <div className={styles["company-title"]}>
            The Home Depot, Atlanta, GA
          </div>
          <div className={styles["job-title-date-container"]}>
            <div>
              Software Engineer II
            </div>
            <div>
              July 2024 - Present
            </div>
          </div>
          <div className={styles["job-title-date-container"]}>
            <div>
              Order Fulfillment Associate
            </div>
            <div>
              January - May 2024
            </div>
          </div>
          <div className={styles["job-title-date-container"]}>
            <div>
              Software Engineer Intern
            </div>
            <div>
              May - July 2023
            </div>
          </div>
          <div className={styles["company-title"]}>
            Bend Health
          </div>
          <div className={styles["job-title-date-container"]}>
            <div>
              Software Engineer
            </div>
            <div>
              May - December 2022
            </div>
          </div>

        </div>
        <ul>
        </ul>
        <div className={styles["about-sub-title"]}>
          Skills
        </div >
        <div className={styles["meat-container"]}>
          <Link to={"/dev"} className={styles["link"]}>
            Go check out my portfolio!
          </Link>
        </div>
      </div>
    </div>
  )
}
