import './App.css';
import Footer from "./components/Footer/Footer.component";
import FullBio from "./components/FullBio/FullBio.component";
import Instagram from "./components/Instagram/Instagram.component";
import Introduction from "./components/Introduction/Introduction.component";
import LetsConnect from "./components/LetsConnect/LetsConnect.component";
import Logo from "./components/Logo/Logo.component";
import Navigation from "./components/Navigation/Navigation.component";
import ProfilePhoto from "./components/ProfilePhoto/ProfilePhoto.component";
import Services from "./components/Services/Services.component";
import Work from './components/WorkIDO/Work.component';

function App() {
  return (
    <div className="content-div">
      <div className='navigation_bar'>
        <Logo/>
        <Navigation/>
      </div>
      <div className='quick_introduction'>
        <Introduction/>
        <ProfilePhoto/>
      </div>
      <FullBio/>
      <div className='full_details'>
        <Services/>
      </div>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
