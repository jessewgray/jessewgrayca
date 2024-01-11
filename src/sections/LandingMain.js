
import React, {useEffect, useState} from 'react'

import aPinkSplah from '../pics/lightPinkSplash.png'

const LandingMain = () => {

    const [theNum, setTheNum] = useState(0);

    const textChange = ["web developer", "collaborator", "golfer"];

    let anyNum = 0;
    useEffect(() => {
        const interval = setInterval(() => {
            if (anyNum <2){
                anyNum = anyNum + 1;
            }else{
                anyNum = 0
            }
            setTheNum(anyNum)
            }, 3000);
        return () => clearInterval(interval);
      }, []);



    return (
        <div className="ps">
            <div className="container" id="about" style={{backgroundImage: `url(${aPinkSplah})`, backgroundRepeat:"no-repeat", backgroundPosition:"right", paddingTop:'25px'}}>
                <div className="row">
                    <div className="col-md-6">
                        <div style={{margin:"10% 0", background:"rgba(255, 255, 255, .8)"}}>
                            <h1>Hello, my name is Jesse Gray and I'm a <span className="textChange pink">{textChange[theNum]}</span>.</h1>
                            <p>Hey there! I'm Jesse Gray, the guy who loves tinkering with websites and data stuff. I've been at it for over 9 years, making me your trusty sidekick in the wild world of web development.  I've got a knack for building user-friendly solutions that help folks crush their business goals. Let's chat about turning your digital dreams into a reality. Whether you're running a cozy corner store or steering a corporate ship, I'm here to make your web journey smooth, fun, and downright awesome.</p>
                        </div>
                    </div>
                    <div className="col-md-6" style={{textAlign:"center"}}>
                        <img src={require('../pics/jessePic2.png')} style={{width:"80%", verticalAlign:"bottom", marginTop:"1px"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingMain;

