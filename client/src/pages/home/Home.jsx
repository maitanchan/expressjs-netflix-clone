import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";

const Home = ({ type }) => {

  const [lists, setLists] = useState([])

  const [genre, setGenre] = useState(null)

  useEffect(() => {

    const getRandomLists = async () => {

      try {

        const res = await newRequest.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmFhYzBiZDcxZmFmMzc5NjVjMjc3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDk4NzE3OSwiZXhwIjoxNjg1NDE5MTc5fQ.NjPnAlHkZKAk0sp8fWD2zG6el1_Ai_7Am1lxdLeWuZA",
            },
          }
        )

        setLists(res.data)
        
      } catch (err) {

        console.log(err)

      }
    }

    getRandomLists()

  }, [type, genre])


  return (
    <>
      <div className="home">

        <Navbar />

        <Featured type={type} setGenre={setGenre} />

        {lists.map((list) => (

           <List key={list._id}  list={list}/>

        ))}

      </div>
    </>
  );
};

export default Home;
