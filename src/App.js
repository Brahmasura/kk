import './App.scss';
import { Route, Routes } from "react-router-dom";
import { navLinks } from './Constants/NavLinks';
// import Home from './Pages/Home/Home';
import scrollSnapPolyfill from 'css-scroll-snap-polyfill'
import { useEffect } from 'react';

function App() {
  const init = function(){

    scrollSnapPolyfill()
  }
  
    useEffect(() => {
      init();
      window.addEventListener("resize", scrollSnapPolyfill);

    }, [])
    
    window.addEventListener("resize", scrollSnapPolyfill);
//   function init() {
//     var $win = window;
//     var element = document.getElementById("Footer");
//                                var element2 = window.document.getElementById("contact_section");
//     $win.scroll(function () {
//         if ($win.height() + $win.scrollTop() == window.document.height()) {
//         element.style.cssText += "position: fixed; top: auto; bottom: 0px;"; 
//         element2.style.cssText += "margin-bottom: 80px";

//         }
      
//     });
// };
  return (
    <div className="App">
      <Routes >
        {/* <Route path="/" exact element={<Home />} /> */}
        {navLinks?.map((item) => {
          return (
            <Route path={item?.path} exact={item?.exact} element={item?.element} />
          )
        })}
        </Routes>
    </div>
  );
}

export default App;
