import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
// import HomeBanner from './components/homecontent/HomeBanner';

function App() {
  return (
    <Router>
      
        <Header />
        <Body />
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <br></br> */}
        
        <Footer/>
      
    </Router>
  );
}

export default App;
