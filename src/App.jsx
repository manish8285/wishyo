import Login from "./componets/Login-page/Login";
import Sign from "./componets/Sign-up-page/Sign";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./componets/Navbar-page/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Hundred from "./Pages/Hundred";
import Buy_vouchers from "./Pages/Buy_vouchers";
import Games from "./Pages/Games";
import Buy_medals from "./Pages/Buy_medals";
import FooterWithSitemap from "./componets/footer/Footer";
import WishyoNav from "./componets/Navbar-page/WishyoNav";
import LoginPage from "./componets/Login-page/LoginPage";
import SignupPage from "./componets/Sign-up-page/SignupPage";
import Chat from "./Pages/Chat";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
    return <Navigate to="/" />
    }
    return children
  }
  return (
    <>
      <BrowserRouter>
        <WishyoNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="hundred" element={<Hundred />} />
          <Route path="buy_vouchers" element={<Buy_vouchers />} />
          <Route path="games" element={<Games />} />
          <Route path="buy_medals" element={<Buy_medals />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          
          {/* <Route index element={<ProtectedRoute > */}
              <Route path="chat" element={<Chat />} />
            {/* </ProtectedRoute>}
            /> */}
          
        </Routes>
        <FooterWithSitemap />
      </BrowserRouter>
    </>
  );
}

export default App;
