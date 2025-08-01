
const goToRes = () => {
    console.log('working resume')
    // window.open('https://jessewgray.space/resume/jesseResume.pdf')
    window.open('https://jessewgray.github.io/jwgResume/')
}

const PopResume = () => {
    return(
        <div>
            <p onClick={goToRes} className="popRes">Check out my resume</p>
        </div>
    )
}

export default PopResume;