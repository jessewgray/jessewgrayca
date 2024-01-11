const Footer = () => {

    const footerButton = {
        border:"solid 1px #f75c96",
        margin: "20px 5px",
        borderRadius:"5px",
        color:"white"
    }


    return (
        <div style={{background:"black", padding:"50px 0px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p className="footerTag">JESSEWGRAY.CA</p>
                    </div>
                    <div className="col-md-8">
                        <ul className="nav justify-content-end" style={{color:"white"}}>
                            <li className="nav-item">
                                <a className="nav-link" style={footerButton} href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={footerButton} href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={footerButton} href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={footerButton} href="#partners">Partners</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={footerButton} href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;