import"./Button.css";

export default function Button(props){
    
    return <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="btn">{props.text}</button>;
}
