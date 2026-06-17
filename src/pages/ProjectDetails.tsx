import { useParams } from 'react-router-dom';
import { projectList } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectList.find(p => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const Component = project.pageContent;
  if (Component) {
    return <Component />;
  }
  return <div>No Page for {project.title} built yet</div>;
}
