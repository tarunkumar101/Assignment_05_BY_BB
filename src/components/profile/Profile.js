import "./Profile.css";
import { useState } from "react";

function Profile() {
  const [style,setStyle] = useState({
    backgroundColor : "white",
    color :"black",
    title:"Check To Switch To Dark Mode"
  });
  const [state, setState] = useState({
    name:"Rajiv Mehta",
    email:"rajiv@gmail.com",
    gender:"Male",
    image:"https://m.foolcdn.com/media/dubs/images/smiling_man_in_business_suit_at_laptop_GettyIma.original.jpg"
  });

  const changeTheme = (event) =>{
    //alert(event.target.checked);
    if(event.target.checked){
      setStyle({
        backgroundColor:"black",
        color:"white",
        title:" Un - Check To Switch To Light Mode"
      });
    }
    else{
      setStyle({
        backgroundColor:"white",
        color:"black",
        title:" Check To Switch To Dark Mode"
      });
    }
  }

  const updateStateToAnd = () =>{
    setState({
      name:"Anadhi",
    email:"anadhi@gmail.com",
    gender:"Female",
    image:"https://th.bing.com/th/id/OIP.5K5cgosLi5x7nWLT0UDRKwHaE7?pid=ImgDet&rs=1"
    });
  }

  const updateStateToRK = () =>{
    setState({
      name:"Rajini Kanth",
      email:"rajini@gmail.com",
      gender:"Male",
      image:"https://m.foolcdn.com/media/dubs/images/smiling_man_in_business_suit_at_laptop_GettyIma.original.jpg"
    });
  }

  return (
    <div className="Profile">
      <div className="profileImage">
        <img
          src={state.image}
          width="100%"
          height="100%"
          alt="user"
        />
      </div>

      <div className="profileDetails" style={{backgroundColor: style.backgroundColor,color:style.color}}>
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd> {state.name}</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>{state.email}</dd>
          <dt>
            <b>Gender</b>
          </dt>
          <dd>{state.gender}</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            fugit, ipsa tenetur voluptatibus cumque saepe qui fuga, itaque
            maxime nobis dicta provident ipsam! Corporis ut a qui nesciunt optio
            unde commodi! Ullam nostrum magnam eveniet consequatur quos ea,
            velit iste! maxime nobis dicta provident ipsam! Corporis ut a qui
            nesciunt optio unde commodi! Ullam nostrum magnam eveniet
            consequatur quos ea, velit iste!
          </dd>
        </dl>
        <button onClick={updateStateToRK}>Rajiv Mehta</button>&nbsp;&nbsp;&nbsp;
        <button onClick={updateStateToAnd}>Anadhi</button>
        <br/><br/>
        <input type="checkbox" onClick={changeTheme}/>{style.title}
      </div>
    </div>
  );
}

export default Profile;