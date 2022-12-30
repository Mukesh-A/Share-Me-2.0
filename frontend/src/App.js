import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Header from "./header/Header";
import Home from "./home/Home";
import Add from "./posts/Add";
import Posts from "./posts/Posts";
import PostUpdate from "./posts/PostUpdate";
import Profile from "./profile/Profile";
import { authActions } from "./store";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  // const styles = theme => ({
  //   '@global': {
  //     '*::-webkit-scrollbar': {
  //       width: '0.4em'
  //     },
  //     '*::-webkit-scrollbar-track': {
  //       '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
  //     },
  //     '*::-webkit-scrollbar-thumb': {
  //       backgroundColor: 'rgba(0,0,0,.1)',
  //       outline: '1px solid slategrey'
  //     }
  //   }
  // });

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(authActions.login());
    }
  }, [localStorage]);
  return (
    <div >
      <header>
        <Header />
      </header>

      <section >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/auth" element={<Auth />} />
          {isLoggedIn && (
            <>
              <Route path="/add" element={<Add />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/post/:id" element={<PostUpdate />} />
            </>
          )}
        </Routes>
      </section>
    </div>
  );
}

export default App;
