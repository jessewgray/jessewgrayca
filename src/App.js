
import './App.css';
import Header from './sections/Header';
import LandingMain from './sections/LandingMain';
import SectionTwo from './sections/SectionTwo';
import SectionThree from './sections/SectionThree';
import SectionFour from './sections/SectionFour';
import SectionFive from './sections/SectionFive';
import Footer from './sections/Footer';
import BackToTop from './sections/BackToTop';
import ViewResume from './sections/ViewResume';

function App() {
  return (
    <div className="App">
      <Header />
      <LandingMain />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
