import { useParams } from 'react-router-dom';
import { projectList } from '../data/projects';
import NavArrow from '../components/NavArrow/NavArrow'
import styles from './ProjectDetails.module.css'

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectList.find(p => p.id === Number(id));

  if (!project) {
    return <div className={styles['error']}>
      <NavArrow direction='back' to='/dev' />
      Project not found
      <div></div>
    </div>;
  }

  const Component = project.pageContent;
  if (Component) {
    return <Component />;
  }
  return <div className={styles['error']}>
    <NavArrow direction='back' to='/dev' />
    No Page for {project.title} built yet
    <div></div>
    </div>;
}
