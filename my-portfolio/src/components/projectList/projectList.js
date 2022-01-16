import './projectList.css';
import Project from '../project/project';
import { projects } from '../../projectInfo';

function ProjectList(){
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects</h1>
                <p className="pl-desc">
                    Click the image to be directed to the application.
                </p>
                <p className="pl-desc">
                    Click on the name of the project to be directed to the Github repository.
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) => (
                    <Project key={item.id} title={item.title} img={item.img} link={item.link} repo={item.repo} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList;