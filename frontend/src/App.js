import { Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Header from "./header/Header";
import Home from "./home/Home";
import Posts from "./posts/Posts";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
