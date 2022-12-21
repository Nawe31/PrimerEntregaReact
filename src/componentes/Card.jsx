import Button from "./Button/Button";

function Card(props) {
console.log (props);
return(
<>
<div>
    <h3>{props.tittle}</h3>
    <br/>
    <img height="220px" src={props.img} alt="" />
    <h3>${props.price}</h3>
    <small>{props.detail}</small>
    <Button className="btn" text="Click Me" />
</div>
</>
);
}
export default Card;
