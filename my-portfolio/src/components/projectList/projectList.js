import './projectList.css';
import Project from '../project/project'

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
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}

export default PorjectList;