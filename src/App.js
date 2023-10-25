import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './router/home/Home'
import Product from './router/product/Products'
import Service from './router/service/Service'
import Traning from './router/traning/Traning'
import Provider from './components/provider/Provider';
import News from './components/news/News';
import Operation from './components/operation/Operation'
import Topics from './components/topics/Topics';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Provider />
      <News />
      <Operation />
      <Topics />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/traning" element={<Traning/>}/>
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
