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
        <div className={styles["table-row-title"]}>
          {project.title}
        </div>
        <div className={styles["status-wrapper"]}>
          <div className={styles["status-icon-cell"]}>{project.statusIcon}</div>
          <div className={styles["status-text-cell"]} style={{ color: project.statusColor }}>
            {project.status}
          </div>
        </div>
        {project.previewImageUrl && (
          <div className={styles["preview-image"]}>
            <img src={project.previewImageUrl} alt={project.title} />
          </div>
        )}
        <div className={styles["skills-container"]}>
          {project.techStack?.map((tech) => <Pill key={tech} text={tech} />)}
        </div>
        <div className={styles["description-text"]}>
          {project.shortDescription}
        </div>
      </div>
    </Link>
  )
}
