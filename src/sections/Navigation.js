const Navigation = () => {

    const menuButton = {
        border: "solid 1px #f75c96",
        padding: " 10px 20px",
        margin: "20px",
        borderRadius: "5px",
        color: "white"
    }

    

    const toggleMobile = () => {
        let mobileNav = window.document.querySelector(".mNavWrap");
        let bars = window.document.querySelectorAll(".navBarStyle");
        let bird = window.document.querySelector(".logo");
        if(mobileNav.classList.contains("hide")){
            mobileNav.classList.remove("hide")
            bars[0].classList.add("xTop")
            bars[1].classList.add("xMid")
            bars[2].classList.add("xBottom")
            bird.classList.add("flipBird")
        }else{
            mobileNav.classList.add("hide");
            bars[0].classList.remove("xTop")
            bars[1].classList.remove("xMid")
            bars[2].classList.remove("xBottom")
            bird.classList.remove("flipBird")
            bird.classList.add("bird")
        }
        
        
    }

    return (
        <div style={{marginTop:"25px"}}>
            <ul className="nav justify-content-end hide">
                <li className="nav-item">
                    <a className="nav-link active" href="#about" style={menuButton}>About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#skills" style={menuButton}>Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#" style={menuButton}>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#" style={menuButton}>Partners</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#" style={menuButton}>Contact</a>
                </li>
            </ul>
            <div className="hamburger hamburgerStyle" onClick={toggleMobile}>
                <div className="navBarStyle"></div>
                <div className="navBarStyle"></div>
                <div className="navBarStyle"></div>
            </div>
        </div>
    )
}

export default Navigation;