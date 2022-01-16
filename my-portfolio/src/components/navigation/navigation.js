import './navigation.css';
import Pdf from '../../Resume.pdf'

function Navigation(){
    return (
        <div className="n">
            <a href="#a" className="n-link">About</a>
            <a  className="n-link">Projects</a>
            <a  className="n-link">Contact</a>
            <a href={Pdf} target="_blank" className="n-link">Resume</a>
        </div>
    )
}

export default Navigation;