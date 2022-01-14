import './project.css'
import placeholder from '../../img/placeholder.png'

function Project({img, link}){
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}

export default Project;