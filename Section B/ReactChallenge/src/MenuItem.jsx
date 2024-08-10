const MenuItem = ({ name, description, price }) => (
    <div className="ml-6 mt-12">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <i>{description}</i>
      <p className="text-orange-800 font-bold mt-2">₹{price.toFixed(2)}</p>
      <hr className="mt-6 h-1  bg-gray-200" />
    </div>
  );

export default MenuItem;