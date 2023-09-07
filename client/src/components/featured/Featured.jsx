import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";

const Featured = ({ type, setGenre }) =>  {

  const [content, setContent] = useState({})

  useEffect(() => {

    const getRandomContent = async () => {

        try {

          const res = await newRequest.get(`/movies/random?type=${type}`,
              {
                headers: {
                  token:
                    "bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmFhYzBiZDcxZmFmMzc5NjVjMjc3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDk4NzE3OSwiZXhwIjoxNjg1NDE5MTc5fQ.NjPnAlHkZKAk0sp8fWD2zG6el1_Ai_7Am1lxdLeWuZA",
                },
              })

          setContent(res.data[0])
          
        } catch (err) {

          console.log(err)
          
        }

    }

    getRandomContent()

  },[type])



  return (
    <div className="featured">

      {type && (
        <div className="category">

          <span>{type === "movie" ? "Movies" : "TV Series"}</span>

          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>

            <option>Thể loại</option>

            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="anime">Anime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>

        </div>

      )}

      <img
        src={content?.img}
        alt=""
      />

       

      <div className="info">

        {/* <img
          src={content?.imgTitle}
          alt=""
        /> */}

        <span className="desc">
        {content?.title}
        </span>

        <span className="desc">
        {content?.desc}
        </span>

        <div className="buttons">

          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>

          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>

        </div>

      </div>

    </div>

  );
}

export default Featured