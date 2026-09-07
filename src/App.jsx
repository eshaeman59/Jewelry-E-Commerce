import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero"
import ProductSection from "./Components/ProductSection"
 function App (){
  return (
    <div className="app">
      <Navbar/>

      <Hero/>

      <ProductSection/>

    </div>
  )
 }
 export default App;