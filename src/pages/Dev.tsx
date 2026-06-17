import ProjectsTable from "../components/ProjectsTable/ProjectsTable";
import styles from "./Dev.module.css";

export default function Dev() {
  return (
    <div className={styles["dev-container"]} >
      <div className={styles["page-title"]}>
        Development Portfolio
      </div>
      <ProjectsTable />
    </div>
  );
}
