import { Link, useLocation } from "react-router-dom";
import "./list.css";
import { Publish } from "@material-ui/icons";
import { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";

export default function List() {

    const location = useLocation()

    const listId = location.pathname.split("/")[2]

    const [list, setList] = useState({})

    useEffect(() => {

        const fetchList = async () => {

            try {

                const res = await newRequest.get(`/lists/find/${listId}`)

                setList(res.data)
                
            } catch (err) {

                console.log(err)
                
            }

        }

        fetchList()

    },[listId])

    console.log(list)

  return (

    <div className="product">

      <div className="productTitleContainer">

        <h1 className="productTitle">List</h1>

        <Link to="/newlist">
          <button className="productAddButton">Thêm </button>
        </Link>

      </div>

      <div className="productTop">

          <div className="productTopRight">

              <div className="productInfoTop">
                  <span className="productName">{list.title}</span>
              </div>

              <div className="productInfoBottom">

                  <div className="productInfoItem">
                      <span className="productInfoKey">Id:</span>
                      <span className="productInfoValue">{list._id}</span>
                  </div>

                  <div className="productInfoItem">
                      <span className="productInfoKey">Genre:</span>
                      <span className="productInfoValue">{list.genre}</span>
                  </div>

                  <div className="productInfoItem">
                      <span className="productInfoKey">Type:</span>
                      <span className="productInfoValue">{list.type}</span>
                  </div>

              </div>

          </div>

      </div>
      
      <div className="productBottom">

          <form className="productForm">

              <div className="productFormLeft">

                  <label>Title </label>

                  <input type="text" placeholder={list.title} />

                  <label>Type</label>

                  <input type="text" placeholder={list.type} />

                  <label>Genre</label>

                  <input type="text" placeholder={list.genre} />

              </div>

              <div className="productFormRight">

                  <button className="productButton">Update</button>

              </div>

          </form>

      </div>

    </div>

  );
}
