import './projectList.css';
import Project from '../project/project';
import { projects } from '../../projectInfo';

function PorjectList(){
    return (
        <div className="pl">
            <div classname="pl-texts">
                <h1 className="pl-title">Project Title 1</h1>
                <p className="pl-desc">
                    This is a description of my first project. This is a description of my first project.
                    This is a description of my first project. This is a description of my first project.
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default PorjectList;