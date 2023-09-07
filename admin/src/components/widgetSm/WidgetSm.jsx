import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import newRequest from "../../utils/newRequest";

export default function WidgetSm() {

  const [newUser, setNewUser] = useState([])

  useEffect(() => {

    const fetchNewUser = async () => {

      try {

       const res = await newRequest.get(`/users?new=true`, 
         {
           headers:{
            token: "bear " + JSON.parse(localStorage.getItem("user")).accessToken
           }
         })

       setNewUser(res.data)
        
      } catch (err) {

        console.log(err)
        
      }

    }

    fetchNewUser()

  },[])

  return (

    <div className="widgetSm">

      <span className="widgetSmTitle">Người dùng gần đây</span>

      <ul className="widgetSmList">

        {newUser.map((user) => (
        <li className="widgetSmListItem" key={user._id}>

          <img
            src={user.profilePic || "/img/noavatar.jpg"} 
            alt=""
            className="widgetSmImg"
          />

          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>

          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>

        </li>
        ))}

      
      </ul>
    </div>
  );
}
