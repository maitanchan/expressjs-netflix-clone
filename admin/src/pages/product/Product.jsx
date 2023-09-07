import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";

export default function Product() {

    const location = useLocation()

    const movieId = location.pathname.split("/")[2]

    const [movie, setMovie] = useState({})

    useEffect(() => {

        const fetchUser = async () => {

            try {

                const res = await newRequest.get(`/movies/find/${movieId}`)

                setMovie(res.data)
                
            } catch (err) {

                console.log(err)
                
            }

        }

        fetchUser()

    },[movieId])

  return (

    <div className="product">

      <div className="productTitleContainer">

        <h1 className="productTitle">Movie</h1>

        <Link to="/newproduct">
          <button className="productAddButton">Thêm </button>
        </Link>

      </div>

      <div className="productTop">

          <div className="productTopRight">

              <div className="productInfoTop">
                  <img src={movie.img} alt="" className="productInfoImg" />
                  <span className="productName">{movie.title}</span>
              </div>

              <div className="productInfoBottom">

                  <div className="productInfoItem">
                      <span className="productInfoKey">Id:</span>
                      <span className="productInfoValue">{movie._id}</span>
                  </div>

                  <div className="productInfoItem">
                      <span className="productInfoKey">Genre:</span>
                      <span className="productInfoValue">{movie.genre}</span>
                  </div>

                  <div className="productInfoItem">
                      <span className="productInfoKey">Year:</span>
                      <span className="productInfoValue">{movie.year}</span>
                  </div>

                  <div className="productInfoItem">
                      <span className="productInfoKey">Limit:</span>
                      <span className="productInfoValue">{movie.limit}</span>
                  </div>

              </div>

          </div>

      </div>
      
      <div className="productBottom">

          <form className="productForm">

              <div className="productFormLeft">

                  <label>Title </label>

                  <input type="text" placeholder={movie.title} />

                  <label>Year</label>

                  <input type="text" placeholder={movie.year} />

                  <label>Genre</label>

                  <input type="text" placeholder={movie.genre} />

                  <label>Limit</label>

                  <input type="text" placeholder={movie.limit} />

                  <label>Trailer</label>

                  <input type="file" placeholder={movie.trailer} />

                  <label>Video movie</label>

                  <input type="file"  placeholder={movie.video} />

              </div>

              <div className="productFormRight">

                  <div className="productUpload">

                      <img src={movie.img} alt="" className="productUploadImg" />

                      <label for="file">
                          <Publish/>
                      </label>

                      <input type="file" id="file" style={{display:"none"}} />

                  </div>

                  <button className="productButton">Update</button>

              </div>

          </form>

      </div>

    </div>

  );
}
