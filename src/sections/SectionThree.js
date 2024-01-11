import aBlackSplash from '../pics/blackSplash2.png'
import Projects from './Projects'

const SectionThree = () => {
    return (
        <div className="bs" style={{backgroundColor:"#f75c96"}}>
            <div className="container" id="portfolio" style={{backgroundImage: `url(${aBlackSplash})`, backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
                <div className="row">
                    <div className="col-md-12" style={{color:"white", paddingTop:"75px", paddingBottom:"75px"}}>
                        <h2>Portfolio</h2>
                        <p className="pText" >Curious about the cool stuff I've been cooking up in the web world? Take a peek at my portfolio – it's like a backstage pass to some of the awesome projects I've worked on. From slick web apps to eye-catching data visuals, there's a bit of everything. (Check back for more soon.)</p>
                        <Projects />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <p style={{color:'white'}} >Other website examples can be provided upon request.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree;