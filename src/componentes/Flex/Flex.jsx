import "./FlexBox.css";

function Flex (props){
    return(
        <div className="flexBox">
            {props.children} </div>
    )
}

export default Flex;