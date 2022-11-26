import Products from './components/Products';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

function App() {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <Products />
      </div>
      <Cart />
    </div>
  );
}

export default App;