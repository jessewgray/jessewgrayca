import Logo from './Logo';
import Navigation from './Navigation';
//import flamingos from '../pics/flamingos.png'
import MobileNav from './MobileNav';

const Header = () => {
    return (
        //<div style={{backgroundImage: `url(${flamingos})`, backgroundSize:"175px"}}>
        <div style={{background: "black"}} id="top">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-6 col-xs-6" style={{padding:"10px 0"}}>
                        <Logo />
                    </div>
                    
                    <div className="col-md-10 col-sm-6 col-xs-6">
                        <Navigation />
                        <div className="mobileNav">
                            <MobileNav />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;