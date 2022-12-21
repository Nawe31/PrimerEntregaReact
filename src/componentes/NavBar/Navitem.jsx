function Navitem ({children, href}){
    return(
    <li className="texto" className="nav-item">
    <a href={href}>{children}</a>
    </li>
    );
}

export default Navitem;