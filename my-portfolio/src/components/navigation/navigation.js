import './navigation.css';

function Navigation(){

    function about(){
        console.log('hello')
    }

    function projects(){
        console.log('hello')
    }

    function contact(){
        console.log('hello')
    }

    function resume(){
        console.log('hello')
    }

    return (
        <div className="n">
            <div onClick={about} className="n-link">About</div>
            <div onClick={projects} className="n-link">Projects</div>
            <div onClick={contact} className="n-link">Contact</div>
            <div onClick={resume} className="n-link">Resume</div>
        </div>
    )
}

export default Navigation;