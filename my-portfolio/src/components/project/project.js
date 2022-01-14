import './project.css'
import placeholder from '../../img/placeholder.png'

function Project(){
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href="https://google.com" target="_blank">
                <img src={placeholder} alt="" className="p-img" />
            </a>
        </div>
    )
}

export default Project;