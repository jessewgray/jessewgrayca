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
            <div className="jobArea" style={{background:'rgba(0, 0, 0, .9)'}}>
                <div className={showTab === 1 ? "show" : "hide"}>
                    <h2>Web Developer</h2>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="white">Got a vision for a dynamic CMS-driven site or a sleek modern application? Well, buckle up, because I'm here to make it happen! Trust me to handle everything, from birthing your idea to giving it a cozy home on the web. I'm all about delivering seamless performance and killer user experiences.</p>
                            <p className="white">So, let's amp up your online identity together! My tailored solutions are geared to meet your business's ever-evolving needs in the crazy world of digital possibilities. Let's make your online presence shine!</p>
                        </div>
                        <div className="col-md-4">
                            <p className="white">Where I shine:</p>
                            <p className="white">HTML, CSS, JavaScript, ReactJS, NodeJS, PHP, MySQL, WordPress</p>
                            <p className="white">Also:</p>
                            <p className="white">Python, Flask, Shopify</p>
                        </div>      
                    </div>
                    
                </div>
                <div className={showTab === 2 ? "show" : "hide"}>
                    <h2>Collaborator</h2>
                    <div className="row">
                        <div className="col-md-8">
                            <p className="white">When it comes to digital project management, I'm your go-to person—whether it's a big project requiring intricate planning or a smaller one needing a personal touch.</p>
                            <p className="white">I ensure everything runs smoothly within budget, regardless of project size. My mission is simple yet powerful—delivering top-notch solutions on time, exceeding expectations.</p>
                            <p className="white">What's awesome is collaborating with clients. It's not just a project; it's a joint effort. We'll chat, brainstorm, and figure out what works best. The best part? Making sure it unfolds seamlessly within the set timelines and budgets.</p>
                            <p className="white">So, buckle up! I'm not just managing projects; I'm here to create success stories. Let's conjure up some digital magic together!</p>
                        </div>
                        <div className="col-md-4">
                            <p className="white">How I stay on track:</p>
                            <p className="white">Agile, Scrum, Jira, Monday</p>
                        </div>
                    </div>
                </div>
                <div className={showTab === 3 ? "show" : "hide"}> 
                    <h2>Other</h2>                    
                    <div className="row">
                        <div className="col-md-8">
                            <p className="white">So, here's the lowdown on what I do: I'm the go-to person for managing incident reporting and playing detective with task tracking and ticketing software. It's like being the superhero in the digital world.</p>
                            <p className="white">But that's not all! I'm also the backstage guru, making sure our client-hosted sites get the VIP treatment. Regular check-ups and updates are like giving them a digital spa day, ensuring they stay top-notch on both local and public servers.</p>
                            <p className="white">And the secret sauce? Backing up code bases with version control. It's our safety net, ready to roll out the red carpet if things go a bit haywire. I'm here, not just managing the digital chaos but keeping everything safe and up-to-date with all systems rocking!</p>
                        </div>
                        <div className="col-md-4">
                            <p className="white">Tools of the trade:</p>
                            <p className="white">Bitbucket, GitHub, ZenDesk</p>
                            <p className="white">Hosting with:</p>
                            <p className="white">Azure, GoDaddy, Bluehost</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs;