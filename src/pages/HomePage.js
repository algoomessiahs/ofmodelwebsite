
import { NavBar } from "./../components/Top/NavBar";
import { Banner } from "./../components/Top/Banner";


import HomeContentsCard from "./../components/Contents/HomeContents/home-contents-card";
import Gallery from './../components/Contents/Gallery/Gallery';
import About from './../components/Contents/About/About';
import Meet from './../components/Contents/Meet/Meet';
import Footer from './../components/Footer/Footer';



const HomePage = () => {
    return (
      <div>
<NavBar />
<Banner />
<HomeContentsCard />
<Gallery />
<About />
<Meet />
<Footer />
      </div>
    );
  };
  
  export default HomePage;
  