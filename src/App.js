import "./App.css";
import { Routes, Route} from 'react-router-dom';
import { HomePage, ProductListing, Login, Signup, Cart, Wishlist, PageNotFound  } from "./pages/index";
import { useAuth } from './context/AuthContext';
import { Footer } from './components/Footer';



function App() {
  const { initialAuth: { isLoggedIn }} = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/productlist" element={isLoggedIn ?  <ProductListing /> : <Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/cart" element={isLoggedIn ?  <Cart /> : <Login />}/>
        <Route path="/wishlist" element={isLoggedIn ?  <Wishlist /> : <Login />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
