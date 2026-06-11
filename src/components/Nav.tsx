import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/dev", label: "Dev" },
  { to: "/photos", label: "Photos" },
];

export default function Nav() {
  return (
    <nav>
      {links.map(({ to, label }) => (
        <NavLink key={to} to={to} end>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
