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
      <h1> Jewelry Store 
        <p> Beautiful jewelry, made for every moment.</p>
      </h1>

    </div>
  )
 }
 export default App;