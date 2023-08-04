import React,{useState} from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./component/store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const ShowCardhandler = () => {
    setCartIsShown(true)
  }
  const HideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <div className="App">
      <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler}/> }
      <Header onShowCart={ShowCardhandler}/>
      <main style={{ position: 'relative'}}>
         <Meals />
      </main>
      </CartProvider>
    </div>
  );
}

export default App;
