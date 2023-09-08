import "./App.scss"
import Header from "../header/header";
import Footer from "../footer/footer";
import MoreInf from "../pages/helpChilren/moreInf";
import { Main, HelpArmy, HelpChilren, Aero, About, News } from "../pages/index"

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [img, setImg] = useState('')
  const setNewImg = (link) => setImg(link);

  function rowSumOddNumbers(n) {
    let number = 1;
    for (let index = 0; index < n; index++) {
      ++index;
    }
    return number
  }
  console.log(rowSumOddNumbers(42))
  return (
    <>
      <Header />
      <Routes>
        <Route path="wilni" element={<Main />} />
        <Route path="helpArmy" element={<HelpArmy />} />
        <Route path="helpChild" element={<HelpChilren setNewImg={setNewImg} />}>
          <Route path="moreInfo" element={<MoreInf img={img} />} />
        </Route>
        <Route path="aeroexposure" element={<Aero />} />
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
