import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import styles from './Nav.module.css';

const links = [
  { to: "/dev", label: "Dev" },
  { to: "/photos", label: "Photos" },
];

function getNavLabelComponent(to: string, label: string, isCurrentPage: boolean) {
  if (isCurrentPage) {
    return (
      <div className={styles["nav-link-current"]}>
        {label}
      </div>
    )
  }
  return (
    <Link key={to} to={to} className={styles["nav-link"]}>
      {label}
    </Link>
  )
}

export default function Nav() {
  const [isHome, setIsHome] = useState(false);
  let location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location])

  if (isHome) {
    return null;
  }



  return (
    <nav className={styles['nav-container']}>
      <Link to={"/"} className={styles["nav-link"]}>
        Charlie Webb
      </Link>
      <div className={styles['nav-link-list']}>
        {links.map(({ to, label }) => getNavLabelComponent(to, label, to === location.pathname))}
      </div>
    </nav>
  );
}
