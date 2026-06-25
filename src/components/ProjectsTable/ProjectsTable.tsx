import { projectList } from "../../data/projects"
import ProjectsTableRow from "./ProjectsTableRow"
import styles from "./ProjectsTable.module.css"

export default function ProjectsTable() {
  // Header count of things in the table.
  // List / Gallery view toggle (future state)
  const projectListCount = projectList.length;

  const projects = projectList.sort((a, b) => a.id - b.id);

  return (
    <div className={styles["table-container"]}>
      <div className={styles["table-header"]}>
        <p>
          {projectListCount} Projects • Tutorials or code where possible
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
