
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
            }, 2500);
        return () => clearInterval(interval);
      }, []);



    return (
        <div className="ps">
            <div className="container" id="about" style={{backgroundImage: `url(${aPinkSplah})`, backgroundRepeat:"no-repeat", backgroundPosition:"right", paddingTop:'25px'}}>
                <div className="row">
                    <div className="col-md-6">
                        <div style={{margin:"10% 0", background:"rgba(255, 255, 255, .8)"}}>
                            <h1>Hello, my name is Jesse Gray and I'm a <span className="textChange pink">{textChange[theNum]}</span>.</h1>
                            <p>Hi, I'm Jesse Gray, a web enthusiast with 9 years of experience. As your trusty sidekick in web development, I specialize in crafting user-friendly solutions to help you achieve your business goals. Let's turn your digital dreams into reality – whether you run a corner store or a corporate ship, I'm here to make your web journey smooth, fun, and awesome!</p>
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

