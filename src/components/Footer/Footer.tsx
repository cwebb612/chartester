import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-grid']}>

        <div className={styles['footer-col']}>
          <div className={styles['footer-name']}>Charlie Webb</div>
          <p className={styles['footer-tagline']}>US based software developer.</p>
          <div className={styles['footer-copy']}>&copy; {new Date().getFullYear()} Charlie Webb</div>
        </div>

        <div className={styles['footer-col']}>
          <nav className={styles['footer-links']}>
            <Link to="/" className={styles['footer-link']}>Home</Link>
            <Link to="/dev" className={styles['footer-link']}>Dev</Link>
            <Link to="/photos" className={styles['footer-link']}>Photos</Link>
            <a href="https://charlie-webb.com" className={styles['footer-link']}>Landing Page</a>
            <a href="https://github.com/cwebb612" target="_blank" rel="noreferrer" className={styles['footer-link']}>GitHub</a>
          </nav>
        </div>

      </div>
    </footer>
  )
}
