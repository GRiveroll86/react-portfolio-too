import './project.css'

function Project({title, img, link, repo}){
    return (
        <div className="p">
            <div className="p-browser">
                <a href={repo} target="_blank" className="p-title">{title}</a>
            </div>
            <a href={link} target="_blank">
                <img src={img} alt="preview image of application" className="p-img" />
            </a>
        </div>
    )
}

export default Project;