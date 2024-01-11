import aWhiteSplah from '../pics/whiteSplash.png';
import Tabs from './Tabs';

const SectionTwo = () => {
    //const oldColour = "#fc1c6f"
    return (
        <div className="ws" style={{backgroundColor:"black"}}>
            <div className="container" id="skills" style={{backgroundImage: `url(${aWhiteSplah})`, backgroundRepeat:"no-repeat", backgroundPosition:"center left", paddingTop:"75px", paddingBottom:"75px"}}>
                <div className="row" style={{}}>
                    <div className="col-md-12" style={{color:"#f75c96"}}>
                        <Tabs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo;



