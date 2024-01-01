import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {useState} from "react";
import {useEffect} from "react";
import useProduct from "./hooks/useProduct";
import Home from "./pages/Home";
import toast from "react-hot-toast";

const App = () => {
  const {products, isLoading} = useProduct();
  const [data, setData] = useState(products || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedValue, setSortedValue] = useState("");
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (searchQuery.length <= 0) {
      setData(products);
      return;
    } else {
      const filteredData = products.filter((product) =>
        product?.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setData(filteredData);
    }
  }, [products, searchQuery]);

  useEffect(() => {
    setData((prevData) => {
      if (sortedValue === "asc") {
        return [...prevData].sort((a, b) => a.price - b.price);
      }
      if (sortedValue === "dsc") {
        return [...prevData].sort((a, b) => b.price - a.price);
      }
      return prevData;
    });
  }, [sortedValue]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
      setCartItemCount(cart.length);
    }
  }, []);

  const handleAddToCart = (product) => {
    toast.success(product?.title + " added to cart");
    let newCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    setCartItemCount(newCart.length);
  };

  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar onSearch={setSearchQuery} cartItemCount={cartItemCount} />
      <Home
        products={data}
        isLoading={isLoading}
        setSortedValue={setSortedValue}
        sortedValue={sortedValue}
        handleAddToCart={handleAddToCart}
      />
      <Footer />
    </main>
  );
};

export default App;
