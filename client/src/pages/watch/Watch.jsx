import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";

const Watch = () =>  {

 const movieId = useLocation().pathname.split("/")[2]

 const [movie, setMovie] = useState({})

 useEffect(() => {

  const getMovie = async () => {

    try {

      const res = await newRequest.get(`/movies/find/${movieId}`)

      setMovie(res.data)
      
    } catch (err) {

       console.log(err)
      
    }

  }

  getMovie()

 },[movieId])

  return (

    <div className="watch">

      <div className="back">
        <ArrowBackOutlined />
        <Link to="/">Home</Link>
      </div>

      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src={movie.video}
      />

    </div>
  );
}

export default Watch
