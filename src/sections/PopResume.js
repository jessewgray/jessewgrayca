
const goToRes = () => {
    console.log('working resume')
    window.open('https://jessewgray.space/resume/resume.pdf')
}

const PopResume = () => {
    return(
        <div>
            <p onClick={goToRes} className="popRes">Check out my resume</p>
        </div>
    )
}

export default PopResume;