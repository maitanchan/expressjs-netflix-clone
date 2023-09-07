import "./listItem.scss";
import {PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined,} from "@material-ui/icons";
import { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest.js";
import { Link } from "react-router-dom";

const ListItem = ({ index , item}) => {

  const [isHovered, setIsHovered] = useState(false)

  const [movies, setMovies] = useState({})

  useEffect(() => {

    const fetchMovies = async () => {

      try {

        const res = await newRequest.get(`/movies/find/${item}`,
          {
            headers: {
              token:
                "bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmFhYzBiZDcxZmFmMzc5NjVjMjc3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDc5NjgxMiwiZXhwIjoxNjg1MjI4ODEyfQ.AXh2C5g0mlO3m9kS4W29itUsjTp6lrvTdOSIvngFuWc",
            },
          }
        )
        setMovies(res.data)
      } catch (err) {

        console.log(err)
        
      }

    }

    fetchMovies()

  },[item])

  return (

    <Link to={`/watch/${movies._id}`}>
     <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <img
        src={movies.img}
        alt=""
      />

      {isHovered && (

        <>
          <video src={movies.trailer} autoPlay={true} loop />

          <div className="itemInfo">

            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span className="limit">+{movies.limit}</span>
              <span>{movies.year}</span>
            </div>

            <div className="desc">
            {movies.desc}
            </div>

            <div className="genre">{movies.genre}</div>

          </div>
        </>
      )}

     </div>

    </Link>

  );

}

export default ListItem