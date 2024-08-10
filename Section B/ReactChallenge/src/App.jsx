import './App.css'
import MenuPage from './MenuItem'

function App() {
  const menuData = {
    "m1": {"description": "Chicken Fried Rice", "name": "FriedRice", "price": 150.00},
    "m2": {"description": "Mutton Briyani", "name": "Briyani", "price": 175.00},
    "m3": {"description": "Idly with Vada", "name": "Idly", "price": 50.00},
    "m4": {"description": "Dosai with potato masala", "name": "Dosai", "price": 55.00}
  };
  return (
    <>
    {/* converts object values to array */}
      {Object.values(menuData).map((item, index) => (
        <MenuPage
          key={index}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </>
  )
}

export default App
