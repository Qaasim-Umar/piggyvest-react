import Navbar from './sections/Navbar/Navbar';
import './App.css';
import Landing from './sections/Landing/Landing';
import Security from './sections/Security/Security';
import Savings from './sections/Savings/Savings';
import Investment from './sections/Investment/Investment';
import Topsaver from './sections/Topsaver/Topsaver';
import Customer from './sections/Customer/Customer';
import Featured from './sections/Featured/Featured';
import Footer from './sections/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Security/>
      <Savings/>
      <Investment/>
      {/* <Topsaver/>
      <Customer/>
      <Featured/>
      <Footer/> */}
     
    </div>
  );
}

export default App;
