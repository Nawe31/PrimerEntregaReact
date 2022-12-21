
import './App.css';
import Card from "./componentes/Card";
import Navbar from './componentes/NavBar/Navbar';
import Flex from './componentes/Flex/Flex';







function App() {
  return (
  <div>
    
       <div>
      <Navbar/>
      
        <div>
        <Flex>
        <Card img="/imagen/argentina.jpg" tittle="pantalon" price={300} detail="pantalon"/>
        <Card img="/imagen/depaul.jpg"tittle="remera" price={500} detail="remera"/>
        <Card img="/imagen/argentina.jpg" tittle="pantalon" price={300} detail="pantalon"/>
        
        </Flex>
        </div>
    </div>

    
      </div>
  );
}

export default App;
