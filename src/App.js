import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import { LandingPage } from "./pages/landing_page/landing_page"
import { BistroOrder } from "./pages/bistro_order/bistro_order"
import { Cart } from "./pages/bistro_cart/bistro_cart"
import { ShopContextProvider } from "./context/bistro_context";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            {/* landing page */}
            <Route path = "/"  element = {<LandingPage />} />
            {/* bistro order */}
            <Route path = "/bistro_order" element = {<BistroOrder />}/>
            {/* cart */}
            <Route path = "/bistro_cart" element = {<Cart />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}


export default App;
