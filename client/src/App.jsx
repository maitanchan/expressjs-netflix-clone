import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const user = false
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route exact path="/" element={user ? <Home /> : <Register />} />

          <Route path="/login" element={!user ? <Login /> : <Home />} />

          <Route path="/register" element={!user ? <Register /> : <Home />} />

          {user && (

            <>
              <Route path="/movies" element={<Home type="movie" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch/:id" element={<Watch />} />
            </>
            
          )}

          
          
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;
