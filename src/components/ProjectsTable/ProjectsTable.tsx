import { projectList } from "../../data/projects"
import ProjectsTableRow from "./ProjectsTableRow"
import styles from "./ProjectsTable.module.css"

export default function ProjectsTable() {
  // List / Gallery view toggle (future state)
  const projectListCount = projectList.length;

  const projects = projectList.sort((a, b) => a.id - b.id);

  return (
    <div className={styles["table-container"]}>
      <div className={styles["table-header"]}>
        <p>
          {projectListCount} Projects
        </p>
        <p>
          Status
        </p>
      </div>
      <div>
        {projects.map((project) => <ProjectsTableRow project={project}/>)}
      </div>
    </div>
  )
}
