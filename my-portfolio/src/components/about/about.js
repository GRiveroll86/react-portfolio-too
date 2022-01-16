import './about.css'
import portrait from '../../img/portrait.png'

function About() {

    return (
        <div className="a">

            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={portrait} alt="portrait of Greg" className="a-img" />
                </div>
            </div>

            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-desc">
                My name is Greg Riveroll. I've been in corrections for over six years as an officer and a storekeeper in the commissary. 
                My passion for computers and technology led me to seek further education in web development as I hope to pursue an exciting new career path. 
                Below are some examples of my projects. My contact information and message form are in the footer.
                </p>
            </div>
        </div>
    )
}

export default About;