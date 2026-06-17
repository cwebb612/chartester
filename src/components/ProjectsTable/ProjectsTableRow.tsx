import { Project } from "../../data/projects"
import Pill from "../Pill/Pill"
import styles from "./ProjectsTable.module.css"
import { Link } from "react-router-dom";

type ProjectsTableRowParams = {
  project: Project
}

export default function ProjectsTableRow({project}: ProjectsTableRowParams) {
  return (
    <Link to={`/projects/${project.id}`} style={{textDecoration:"none", color: "inherit" }}>
      <div className={styles["table-row-container"]}>
        <div className={styles["id-text"]}>
          {String(project.id).padStart(2, '0')}
        </div>
        <div className={styles["information-stack"]}>
          <div className={styles["table-row-title"]}>
            {project.title}
          </div>
          <div>
            {project.shortDescription}
          </div>
          <div className={styles["skills-container"]}>
            {project.techStack?.map((tech) => <Pill text={tech} />)}
          </div>
        </div>
        <div className={styles["horizontal-push"]}>
          {project.statusIcon}
        </div>
        <div style={{ color: project.statusColor}}>
          {project.status}
        </div>
      </div>
    </Link>
  )
}
