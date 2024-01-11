

const MobileNav = () => { 

    const mobileNavStyle = {
        background: "rgba(0,0,0,.9)", 
        position: "absolute",
        top:"135px",
        bottom:"0px",
        left:"0px",
        right:"0px",
    }
    const mNavInner = {
        textAlign:"center",
        marginTop:"75px"
    }
    const mobileNavButton = {
        border: "1px solid rgb(247, 92, 150)",
        padding: "20px",
        margin: "10px",
        borderRadius:"5px",
        color: "white",
        width:"75%",
        margin:"20px auto"
    }

    const toggleMenu = () => {
        let mNav = window.document.querySelector('.mNavWrap')
       if (mNav.classList.contains('hide')){
        mNav.classList.remove('hide')
       }else{
        mNav.classList.add('hide')
        let bars = window.document.querySelectorAll(".navBarStyle");
        bars[0].classList.remove("xTop")
        bars[1].classList.remove("xMid")
        bars[2].classList.remove("xBottom")
        let bird = window.document.querySelector(".logo");
        bird.classList.remove("flipBird")
        bird.classList.add("bird")
       }
    }
        

    return (
        <div>
            <div className="mNavWrap hide" style={mobileNavStyle}>
                <div style={mNavInner}>
                    <div>
                        <a href="#about" style={mobileNavButton} className="nav-link" onClick={toggleMenu}>About</a>
                    </div>
                    <div>
                        <a href="#skills" style={mobileNavButton} className="nav-link" onClick={toggleMenu}>Skills</a>
                    </div>
                    <div>
                        <a href="#portfolio" style={mobileNavButton} className="nav-link" onClick={toggleMenu}>Portfolio</a>
                    </div>
                    <div>
                        <a href="#partners" style={mobileNavButton} className="nav-link" onClick={toggleMenu}>Partners</a>
                    </div>
                    <div>
                        <a href="#contact" style={mobileNavButton} className="nav-link" onClick={toggleMenu}>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNav;