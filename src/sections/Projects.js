
const Projects = () =>  {

    const theProjects = require('./TheProjects.json');

    const goToAddress = (theAddress) => {
        window.open(
            theAddress,
            '_blank' // <- This is what makes it open in a new window.
          );
    }
    const url = "https://jessewgray.ca"

    //const bujoldLogo = require('../pics/mbSite.png')
    
    const showWork = theProjects.map((aProject, index) => {
          
            if(index % 3 === 0 && index === theProjects.length -1){
                //console.log('this is the first and last one')
                
                return <div className="col-md-4 project" key={index}>
                    <img src={aProject.picture} onClick={() => goToAddress(aProject.address)}/>
                    <div className="pText"><h3>{aProject.title}</h3>
                    <p>{aProject.blurb}</p>
                    <p>Tech: {aProject.tech}</p>
                    <a href={aProject.address} target='_blank'>Go to site</a>
                    </div>
                </div>
            }else if(index === theProjects.length -1){
                //console.log('this is the last one')
                return <div className="col-md-4 project" key={index}>
                    <img src={aProject.picture} onClick={() => goToAddress(aProject.address)}/>
                    <div className="pText"><h3>{aProject.title}</h3>
                    <p>{aProject.blurb}</p>
                    <p>Tech: {aProject.tech}</p>
                    <a href={aProject.address} target='_blank'>Go to site</a>
                    </div>
                </div>
            }
            else if (index % 3 === 0){
                //console.log(index + ", this will be the opener")
                return <div className="col-md-4 project" key={index}>
                    <img src={aProject.picture} onClick={() => goToAddress(aProject.address)}/>
                    <div className="pText"><h3>{aProject.title}</h3>
                    <p>{aProject.blurb}</p>
                    <p>Tech: {aProject.tech}</p>
                    <a href={aProject.address} target='_blank'>Go to site</a>
                    </div>
                </div>
            }else if((index + 1) % 3 === 0){
               // console.log(index + ", this will be the closer")
                return <div className="col-md-4 project" key={index}>
                    <img src={aProject.picture} onClick={() => goToAddress(aProject.address)}/>
                    <div className="pText"><h3>{aProject.title}</h3>
                    <p>{aProject.blurb}</p>
                    <p>Tech: {aProject.tech}</p>
                    <a href={aProject.address} target='_blank'>Go to site</a>
                    </div>
                </div>
            }else{
               // console.log(index + ", this is the center")
                return <div className="col-md-4 project" key={index}>
                    <img src={aProject.picture} onClick={() => goToAddress(aProject.address)}/>
                    <div className="pText"><h3>{aProject.title}</h3>
                    <p>{aProject.blurb}</p>
                    <p>Tech: {aProject.tech}</p>
                    <a href={aProject.address} target='_blank'>Go to site</a>
                    </div>
                </div>
            }

            
            })
        

    return(
        <div>
            <div className="container projects">
                <div className="row">
                    {showWork}
                </div>
              
               
            </div>
        </div>
    )
}

export default Projects;