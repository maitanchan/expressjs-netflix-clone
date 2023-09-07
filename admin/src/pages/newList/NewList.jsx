import { useContext, useEffect, useState } from "react";
import "./newList.css";
import {  getMovies } from "../../context/movieContext/callApi";
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { createList } from "../../context/listContext/callApi";
import { useNavigate } from "react-router-dom";

export default function NewList() {

  const navigate = useNavigate()

  const [list, setList] = useState(null)

  const {dispatch} = useContext(ListContext)

  const {movies, dispatch: dispatchMovie} = useContext(MovieContext)

  const handleChange = (e) => {

    setList({...list, [e.target.name]: e.target.value})

  }

  useEffect(() => {
    
    getMovies(dispatchMovie)

  },[dispatchMovie])

  const handleSelect = (e) => {

    let value = Array.from(e.target.selectedOptions, (option) => option.value)

    setList({...list, [e.target.name]: value})

  }

  console.log(list)

  const handleSubmit = (e) => {

      e.preventDefault()

      createList(list, dispatch).then(() => {

        navigate("/lists")

      }).catch((error) => {

        console.log(error)
        
      })

  }

  return (

    <div className="newProduct">

      <h1 className="addProductTitle">Thêm mới danh mục </h1>

      <form className="addProductForm">

        <div className="formLeft">

        <div className="addProductItem">

          <label>Tên danh mục</label>

          <input type="text" placeholder="Phim hành động"  name="title"  onChange={handleChange}/>

        </div>

        <div className="addProductItem">

          <label>Thể loại</label>

          <input type="text" placeholder="Action"  name="genre"  onChange={handleChange}/>

        </div>

        <div className="addProductItem">

          <label>Mục</label>

          <select name="type" id="" onChange={handleChange}>
            <option>Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>

          </select>

         </div>

        </div>

        <div className="formRight">

        <div className="addProductItem">

          <label>Phim</label>

          <select multiple name="content" id="" onChange={handleSelect} style={{ height:"280px" }}>

            {movies.map((movie) => (

               <option value={movie._id} key={movie._id}>{movie.title}</option>

            ))}

          </select>

        </div>

        </div>

       
          <button className="addProductButton" onClick={handleSubmit}>Thêm mới</button>
       
          

      </form>

    </div>

  );
}
