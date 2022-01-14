import './about.css'
import placeholder from '../../img/placeholder.png'

function About() {
    return (
        <div className="a">

            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={placeholder} alt="" className="a-img" />
                </div>
            </div>

            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="a-desc">
                    Suspendisse et ligula congue, auctor quam quis, accumsan quam. Mauris egestas, nisi et pretium laoreet, diam erat fermentum lorem, eu tristique ipsum libero eu diam.
                    Pellentesque condimentum dignissim nibh. Phasellus accumsan ultricies ex nec rhoncus. Donec rhoncus tempor sapien ac mattis. Sed vel purus rutrum, tincidunt odio non,
                    consectetur nibh. Aliquam erat volutpat.
                </p>
            </div>
        </div>
    )
}

export default About;