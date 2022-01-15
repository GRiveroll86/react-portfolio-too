import './project.css'
import placeholder from '../../img/placeholder.png'

function Project({title, img, link, repo}){
    return (
        <div className="p">
            <div className="p-browser">
                {/* <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div> */}
                <a href={repo} target="_blank" className="p-title">{title}</a>
            </div>
            <a href={link} target="_blank">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}

export default Project;