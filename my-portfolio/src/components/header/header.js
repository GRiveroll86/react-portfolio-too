import './header.css';
import Navigation from '../navigation/navigation'

function Header() {

    return (
        <div className="i">

            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Greg</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Full Stack</div>
                            <div className="i-title-item">Junior Developer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I am currently enrolled in a full stack web development boot camp.
                    </div>
                </div>
            </div>

            <div className="i-right">
                <Navigation />
            </div>

        </div>
    )
};

export default Header;