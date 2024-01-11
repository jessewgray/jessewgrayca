import anotherBlackSplash from '../pics/blackSplash3-2.png'

const dormieLogo = require('../pics/dormie-logo.png')
const banglogo = require('../pics/bangalbino-logo.png')
const terrapex = require('../pics/TerrapexWhite.png')
const ivyLogo = require('../pics/ivy-logo-white.png')
const goodwoodLogo = require('../pics/goodwoodLogo.png')
const bujoldLogo = require('../pics/bujoldLogo.png')
 const test = require('../pics/jmSite.png')


const partners = {
    width: "80%",
    padding: "5px",
    background: "rgba(0,0,0,.8)"
}
const dormieImg = {
    marginTop: '10%'
}
const ivyImg = {
    marginTop: '30%'
}
const terrapexImg = {
    marginTop: '28%'
}
const bangLogo = {
    width:'70%'
}

const SectionFour = () => {
    return (
        <div className="bs" style={{backgroundColor:"black", paddingBottom:'25px'}}>
            <div className="container" id="partners" style={{backgroundImage: `url(${anotherBlackSplash})`, backgroundRepeat:"no-repeat", backgroundPosition:"bottom right", backgroundSize:'25%'}}>
                <div className="row">
                    <div className="col-md-12" style={{color:"#f75c96", paddingTop:"75px"}}>
                        <h2 style={{marginBottom:'1em'}}>Partners</h2>
                        <div className='row'>
                            <div className='col-md-3'>

                                <div className="flip-card partnerDT">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={dormieLogo} style={{...partners, ...dormieImg}}/>
                                        </div>
                                        <div className="flip-card-back back-one" style={{marginTop:'20%'}}>
                                            <h4>Dormie Workshop</h4>
                                            <p>Golf accessories and leather goods</p>
                                            <a href="https://dormieworkshop.com/" className="pinkLink" target="_blank">Website</a>
                                        </div>
                                    </div>
                                </div>

                                    <div className="partnerMobile">
                                        <img src={dormieLogo} className="dormieImage" style={{...partners, ...dormieImg}}/>
                                    </div>
                                    <div className="partnerMobile" style={{marginTop:'10%', color:'white'}}>
                                        <h4>Dormie Workshop</h4>
                                        <p>Golf accessories and leather goods</p>
                                        <a href="https://dormieworkshop.com/" className="pinkLink" target="_blank">Website</a>
                                    </div>

                            </div>
                            <div className='col-md-3'>

                                <div className="flip-card partnerDT">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={ivyLogo} className="ivyImg" style={{...partners, ...ivyImg}}/>
                                        </div>
                                        <div className="flip-card-back back-two" style={{marginTop:'20%'}}>
                                            <h4>Ivy Group</h4>
                                            <p>Recruitment, Coaching and Career Wellness</p>
                                            <a href="https://myivy.co/" className="pinkLink" target="_blank">Website</a>
                                        </div>
                                    </div>
                                </div>

                                    <div className="partnerMobile">
                                        <img src={ivyLogo} className="ivyImg" style={{...partners, ...ivyImg}}/>
                                    </div>
                                    <div className="partnerMobile" style={{marginTop:'10%', color:'white'}}>
                                        <h4>Ivy Group</h4>
                                        <p>Recruitment, Coaching and Career Wellness</p>
                                        <a href="https://myivy.co/" className="pinkLink" target="_blank">Website</a>
                                    </div>

                            </div>
                            <div className='col-md-3'>

                                <div className="flip-card partnerDT">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={banglogo} className="bangLogo" style={{...partners, ...bangLogo}}/>
                                        </div>
                                        <div className="flip-card-back back-three" style={{marginTop:'20%'}}>
                                            <h4>Bang Albino Inc.</h4>
                                            <p>Strategic creative marketing</p>
                                            <a href="https://www.bangalbino.ca/" className="pinkLink" target="_blank">Website</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="partnerMobile">
                                        <img src={banglogo} className="bangLogo" style={{...partners, ...bangLogo}}/>
                                    </div>
                                    <div className="partnerMobile" style={{marginTop:'10%', color:'white'}}>
                                        <h4>Bang Albino Inc.</h4>
                                        <p>Strategic creative marketing</p>
                                        <a href="https://www.bangalbino.ca/" className="pinkLink" target="_blank">Website</a>
                                    </div>

                            </div>
                            <div className='col-md-3'>

                                <div className="flip-card partner-four partnerDT">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={terrapex} style={{...partners, ...terrapexImg}} />
                                        </div>
                                        <div className="flip-card-back back-four" style={{marginTop:'20%'}}>
                                            <h4>Terrapex Inc.</h4>
                                            <p>Environmental, geoscience, and geotechnical services</p>
                                            <a href="https://terrapex.com/" className="pinkLink" target="_blank">Website</a>
                                        </div>
                                    </div>
                                </div>

                                    <div className="partnerMobile">
                                        <img src={terrapex} className="terrapexImage" style={{...partners, ...terrapexImg}} />
                                    </div>
                                    <div className="partnerMobile" style={{marginTop:'10%', color:'white'}}>
                                        <h4>Terrapex Inc.</h4>
                                        <p>Environmental, geoscience, and geotechnical services</p>
                                        <a href="https://terrapex.com/" className="pinkLink" target="_blank">Website</a>
                                    </div>

                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-12" style={{marginTop:"100px"}}>
                        <div className="col-md-12" style={{}}>
                            <h3 style={{marginBottom:'1em', background:"rgba(0,0,0,0.8)", color:"#f75c96"}}>Sites</h3>
                            <div className='row otherSites' style={{padding:"0 20px", background:"rgba(0,0,0,0.9)"}}>
                                <p><a href="https://goodwoodtree.com/"><img src={goodwoodLogo} style={{width:'75px', marginRight:'15px'}}/>Good Wood Tree Company</a></p>
                                <p style={{marginBottom:'40px'}}><a href="https://mandybujold.com/"><img src={bujoldLogo} style={{width:'75px', marginRight: '15px'}}/>Mandy Bujold</a></p>
                                <p style={{color:'white'}}>Other site examples upon request</p>
                            </div>
                        </div>
                    </div> */}
                    {/* <img src={test}></img> */}
                </div>
            </div>
        </div>
    )
}

export default SectionFour;