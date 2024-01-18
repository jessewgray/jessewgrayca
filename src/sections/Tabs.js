import React, {useState} from 'react'


const theLogos = require('../pics/theLogos.png')

const Tabs = () => {

    const [showTab, setShowTab] = React.useState(1);

    const updateTab = (theID) => {
        setShowTab(theID)
    }

    const menuTabs = {
            border: "1px solid rgb(247, 92, 150)",
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "5px",
            color: "white",
            background: "rgba(0, 0, 0, .8)"
        }

    return(
        <div>
            <div className="menuArea" style={{marginBottom:"50px", textAlign:'center'}}>
                <ul className="inline">
                    <li className={showTab === 1 ? "developer inline activeTab" : "developer inline"} style={menuTabs} onClick={() => updateTab(1)}>Web Developer</li>
                    <li className={showTab === 2 ? "project inline activeTab" :  "project inline"} style={menuTabs} onClick={() => updateTab(2)}>Collaborator</li>
                    <li className={showTab === 3 ? "other inline activeTab" : "other inline"} style={menuTabs} onClick={() => updateTab(3)}>Other</li>
                </ul>
            </div>
            <div className="jobArea" style={{background:'rgba(0, 0, 0, .8)'}}>
                <div className={showTab === 1 ? "show" : "hide"}>
                    <h2>Web Developer</h2>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="white">Got a vision for a dynamic CMS-driven site or a sleek modern app? I'm here to make it happen! From birthing your idea to giving it a cozy home on the web, trust me for seamless performance and killer user experiences. Let's amp up your online identity with tailored solutions that make your business's evolving digital needs shine.</p>
                        </div>
                        <div className="col-md-4">
                            <p className="white">Where I shine:</p>
                            <p className="bigPink">HTML, CSS, JavaScript, ReactJS, NodeJS, PHP, MySQL, WordPress</p>
                            <p className="white">Also:</p>
                            <p className="bigPink">Python, Flask, Shopify</p>
                        </div>      
                    </div>
                    
                </div>
                <div className={showTab === 2 ? "show" : "hide"}>
                    <h2>Collaborator</h2>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="white">When it comes to digital project management, count on me! Big or small, I make sure things run smoothly within budget. My mission is simple—deliver solutions on time, exceeding expectations.</p>
                            <p className="white">What's cool? Collaborating with you! It's not just a project; it's a team effort. We'll chat, brainstorm, and make it work seamlessly within timelines and budgets.</p>
                            <p className="white">So, get ready! I'm not just managing projects; I'm here to create success stories. Let's make some digital magic together!</p>
                        </div>
                        <div className="col-md-4">
                            <p className="white">How I stay on track:</p>
                            <p className="bigPink">Agile, Scrum, Jira, Monday</p>
                        </div>
                    </div>
                </div>
                <div className={showTab === 3 ? "show" : "hide"}> 
                    <h2>Other</h2>                    
                    <div className="row">
                        <div className="col-md-8">
                            <p className="white">Here's the scoop on my role: I'm the go-to person for incident reporting and task tracking, playing digital superhero. But wait, there's more! I give our client-hosted sites VIP treatment through regular check-ups and updates, ensuring top-notch performance on servers.</p>
                            <p className="white">Using version control to back up code bases is our safety net, primed for unexpected twists. I'm here not just to manage digital chaos but also to keep everything safe and up-to-date, ensuring all systems rock!</p>
                        </div>
                        <div className="col-md-4">
                            <p className="white">Tools of the trade:</p>
                            <p className="bigPink">Bitbucket, GitHub, ZenDesk</p>
                            <p className="white">Hosting with:</p>
                            <p className="bigPink">Azure, GoDaddy, Bluehost</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs;