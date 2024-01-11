const BackToTop = () => {

    const chev = require('../pics/chev.png')
    const chevStyle = {
        background: "rgba(0, 0, 0, .7)",
        border: "solid #f75c96",
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        position: "fixed",
        bottom: "15px"
    }

    const goToTop = () => {
        window.location.href = "#top"
    }

    window.onscroll = function() { 
        let scroll = this.scrollY;
        let theChev = window.document.querySelector("#chev")
        if(scroll > 200){
            
            if(theChev.classList.contains("hide")){
                theChev.classList.remove("hide")
            }
        }else{
            if(!theChev.classList.contains("hide")){
                theChev.classList.add("hide")
            }
        }
    }


    return(
        <div onClick={goToTop}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{textAlign:"right"}}>
                        <img src={chev} className="hide" id="chev" style={chevStyle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackToTop;