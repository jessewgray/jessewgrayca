const Logo = () => {
    const goHome = () => {
        window.location.href = "https://jessewgray.ca/"
    }
    return (
        <div>
            <img className="logo bird" src={require('../pics/neonLogo.png')} style={{width:"75px"}} onClick={goHome}/>
        </div>
    )
}

export default Logo;