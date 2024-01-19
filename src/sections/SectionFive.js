import anotherPinkSplash from '../pics/paint22.png'
import PopResume from './PopResume'

const bird = require('../pics/neonLogo.png')
const email = require('../pics/email.png')
const phone = require('../pics/phoneIcon.png')
const linkedIn = require('../pics/linkedIn23.png')
const github = require('../pics/github-mark.png')
const insta = require('../pics/insta33.png')
const contactJesse = require('../pics/mexicoTwoBlurCrop.jpg')

const phoneStyle = {
    width:"43px",
    marginRight:"15px",
    transform:"rotate(12deg)"
}
const wForty = {
    width:"45px",
    marginRight:"15px"
}
const wFifty = {
    width:"45px",
    marginRight:"15px"
}

const goLinkedin = () => {
    window.open("https://www.linkedin.com/in/jessewgray/", "_blank")
}

const goGithub = () => {
    window.open("https://github.com/jessewgray", "_blank")
}

const goInsta = () => {
    window.open("https://www.instagram.com/torontojesse/", "_blank")
}

const SectionFive = () => {
    return (
        <div className="bs" style={{backgroundColor:""}}>
            <div className="container" id="contact" style={{}}>
                <div className="row" style={{paddingTop:"90px", paddingBottom:"75px"}}>
                    <div className="col-md-6 mb50 poloroid" style={{backgroundImage: `url(${anotherPinkSplash})`, backgroundRepeat:"no-repeat", backgroundSize: "115%", backgroundPosition: "bottom left", textAlign:"center", position:"relative"}}>
                        <img src={contactJesse} style={{width:"75%", border:"solid lightgray", padding:"15px 15px 100px 15px", background:"white", transform:"rotate(-5deg)", boxShadow:"4px 4px 10px gray"}}/>
                        <p style={{zIndex:"1000", transform:"rotate(-6deg)", fontSize:"40px", fontWeight:"600", fontFamily:"'Permanent Marker', cursive", textAlign:"center", marginTop:"-85px"}}>CALL ME</p>
                    </div>
                    <div className="col-md-6 whiteBG" style={{}}>
                    <h2>Get in touch</h2>
                        <p style={{marginBottom:"1.5em", marginTop:".5em"}}>Got a project in mind or just want to chat about all things web? I'm all ears! Drop me a message and lets turn your ideas into a reality. I'm here to help, lets make something awesome together.</p>
                        
                        <p><a href="mailto:jwgray2@gmail.com"><img style={wForty} src={email}></img>jwgray2@gmail.com</a></p>
                        <p><img src={phone} style={phoneStyle}/>(416) 725-8095</p>
                        <p><img id="linkedIn" src={linkedIn} style={wFifty} onClick={goLinkedin}/><img id="github" src={github} style={wForty} onClick={goGithub}/><img id="insta" src={insta} style={wFifty} onClick={goInsta}/></p>
                        <PopResume />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFive;


