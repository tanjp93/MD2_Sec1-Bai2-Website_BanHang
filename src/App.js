// import logo from './logo.svg';
// import './App.css';

import ClientSection from "./Component/ClientSection";
import Detail from "./Component/Detail";
import HeaderSlide1 from "./Component/HeaderSlide1";
import Product from "./Component/Product";
import Fluid from "./Component/Fluid";
// import InforSection from "./Component/InforSection";
import SignSection from "./Component/SignSection";
import InforSection from "./Component/InforSection";
import Slider2 from "./Component/Slider2";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
     <>
  <div className="hero_area">
    {/* header section strats */}
    {/*____HEADER______*/}
<HeaderSlide1/>

    {/* end header section */}
    {/* slider section */}

<Slider2/>

    {/* end slider section */}
  </div>
  {/* detail section */}
<Detail/>
  {/* end detail section */}
  {/* products section */}
<Product/>
  {/* end products section */}
  {/* find section */}
<Fluid/>
  {/* end find section */}
  {/* client section */}
<ClientSection/>
  {/* end client section */}
  {/* sign section */}
<SignSection/>
  {/* end sign section */}
  {/* info section */}
  <InforSection/>
  {/* end info section */}
  {/* footer section */}

  {/* footer section */}
</>
 <Footer/>
    </div>
  );
}

export default App;
