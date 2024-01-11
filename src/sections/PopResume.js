
const goToRes = () => {
    console.log('working resume')
    window.open('https://www.google.com')
}

const PopResume = () => {
    return(
        <div>
            <p onClick={goToRes}>Check out my resume</p>
        </div>
    )
}

export default PopResume;