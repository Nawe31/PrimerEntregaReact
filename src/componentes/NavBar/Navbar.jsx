import CardWidget from "../CardWidget/CardWidget";
import Navitem from "./Navitem";


function Navbar(){
    return(
        <>
        <nav class= "navbar navbar-dark bg-dark">
         <div class="container-fluid">
         
          <a class="navbar-brand" href="#">
          <img src="./imagen/logo.jpg" height="90px" alt="" />
          </a>
          
                <Navitem href="/calzado">calzado</Navitem>
                <Navitem href="/remeras">Remeras</Navitem>
                <Navitem href="/otros">Otros</Navitem>
                <CardWidget height="50px" href="/"> </CardWidget>
            
                
       </div>
        </nav>
       
        </>
    );
}

export default Navbar;