import "./Card.css";

function Card(props){
    return(
        <div className="card" style={{backgroundColor:props.bgcolor}}> 
            <img src={props.image}
            width="250" 
            height="200" alt="User"/>
            <h3>{props.name}</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            <button>Profile Details</button>
        </div>
    );
}

export default Card;