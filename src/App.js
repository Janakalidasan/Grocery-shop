import logo from './logo.svg';
import Nav from './Components/Navbar';
import Hero from './Components/Home-hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import Herotwo from './Components/Home-two';
import Herothree from './Components/Home-three';
import Herofour from './Components/Home-four';
import Herofive from './Components/Home-five';
import Herosix from './Components/Hero-six';
import Footer from './Components/Footer.js';
function App() {
  return (
    <div className="App">
  <Nav />
 <Hero />
 <Herotwo />
 <Herothree />
 <Herofour />
 <Herofive />
 <Herosix />
 <Footer />
    </div>
  );
}

export default App;
