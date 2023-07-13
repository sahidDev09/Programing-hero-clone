import React from "react";
import Navbar from "./components/Navbar";
import Heropage from "./components/Heropage";
import HeroInfo from "./components/HeroInfo";

function App() {
  return (
    <div className=" container mx-auto my-10">
     <Navbar/>
     <Heropage/>
     <HeroInfo/>
    </div>
  );
}

export default App;
