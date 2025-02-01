import React, { useState } from 'react';

const FoodCard = ({ imageUrl, name, price, quantityOrdered }) => {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="flex">
        {/* Left side - Food Image */}
        <div className="w-1/3">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-2/3 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
              <p className="text-sm text-gray-600 mt-1">Delicious and freshly prepared</p>
            </div>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-gray-900 mb-4">
            ${price}
          </div>

          {/* Order History - Quantity Ordered */}
          {quantityOrdered > 0 && (
            <div className="text-lg text-gray-600 mb-4">
              <span className="font-semibold">Quantity Ordered: </span>
              {quantityOrdered}
            </div>
          )}

          {/* Order Buttons */}
          <div className="flex space-x-3">
            {!showPaymentOptions ? (
              <>
                <button
                  onClick={() => setShowPaymentOptions(true)}
                  className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Order Now
                </button>
                <button 
                  onClick={() => setShowPaymentOptions(false)}
                  className="w-1/2 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200"
                >
                  Cancel
                </button>
              </>
            ) : (
              <div className="space-y-3 w-full">
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
                  Canteen Card
                </button>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200">
                  Other Payment
                </button>
                <button 
                  onClick={() => setShowPaymentOptions(false)}
                  className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const CanteenCoinCard = ({ totalFoodPrice }) => {
  const canteenCoins = Math.floor(totalFoodPrice * 0.10); // 10% of the total food price

  return (
    <div className="max-w-2xl mx-auto bg-blue-100 rounded-lg shadow-md overflow-hidden mb-6">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Canteen Coins</h2>
        <p className="text-xl text-gray-700 mb-4">You have earned <span className="font-bold">{canteenCoins}</span> Canteen Coins!</p>
        <div className="bg-gray-200 p-4 rounded-lg text-center">
          <p className="text-lg font-bold">Order any item for 100 Canteen Coins!</p>
          <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ foodItems }) => {
  const totalFoodPrice = foodItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="max-w-2xl mx-auto bg-yellow-100 rounded-lg shadow-md overflow-hidden mb-6">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
        <ul>
          {foodItems.map((item, index) => (
            <li key={index} className="flex justify-between text-lg mb-2">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span>${totalFoodPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FoodList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [priceValue, setPriceValue] = useState('');

  const foodItems = [
    { imageUrl: "https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Burger", price: 12.99, quantityOrdered: 2 },
    { imageUrl: "https://images.pexels.com/photos/845798/pexels-photo-845798.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Pizza", price: 15.99, quantityOrdered: 1 },
    { imageUrl: "https://images.pexels.com/photos/3214160/pexels-photo-3214160.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Pasta", price: 10.49, quantityOrdered: 0 },
    { imageUrl: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Salad", price: 8.99, quantityOrdered: 3 },
    { imageUrl: "https://images.pexels.com/photos/1854665/pexels-photo-1854665.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Sushi", price: 18.99, quantityOrdered: 0 },
    { imageUrl: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Steak", price: 22.99, quantityOrdered: 5 },
    { imageUrl: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Sandwich", price: 7.99, quantityOrdered: 4 },
    { imageUrl: "https://images.pexels.com/photos/7613568/pexels-photo-7613568.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Taco", price: 5.99, quantityOrdered: 1 },
    { imageUrl: "https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Ice Cream", price: 4.49, quantityOrdered: 2 },
    { imageUrl: "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Fries", price: 3.99, quantityOrdered: 0 },
    { imageUrl: "https://images.pexels.com/photos/4518656/pexels-photo-4518656.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Hot Dog", price: 6.49, quantityOrdered: 0 },
    { imageUrl: "https://images.pexels.com/photos/3728295/pexels-photo-3728295.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Dumplings", price: 8.49, quantityOrdered: 1 },    
    { imageUrl: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Noodles", price: 10.99, quantityOrdered: 2 },
    { imageUrl: "https://images.pexels.com/photos/775030/pexels-photo-775030.jpeg?auto=compress&cs=tinysrgb&w=400", name: "Smoothie", price: 5.49, quantityOrdered: 0 }
  ];

  const totalFoodPrice = foodItems.reduce((acc, item) => acc + item.price, 0);

  // Filter logic
  const filteredItems = foodItems.filter(item => {
    const matchesName = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesPrice = true;
    if (priceFilter && priceValue) {
      const price = parseFloat(item.price);
      const value = parseFloat(priceValue);

      if (priceFilter === "less" && price >= value) matchesPrice = false;
      if (priceFilter === "greater" && price <= value) matchesPrice = false;
      if (priceFilter === "equal" && price !== value) matchesPrice = false;
    }

    return matchesName && matchesPrice;
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Price Filter */}
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Filter by price</option>
          <option value="less">Less than</option>
          <option value="greater">Greater than</option>
          <option value="equal">Equal to</option>
        </select>

        {/* Price Value Input */}
        <input
          type="number"
          placeholder="Enter price"
          value={priceValue}
          onChange={(e) => setPriceValue(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Display Filtered Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <FoodCard key={index} imageUrl={item.imageUrl} name={item.name} price={item.price} quantityOrdered={item.quantityOrdered} />
          ))
        ) : (
          <p className="text-gray-600">No matching food items found.</p>
        )}
      </div>

      {/* Summary and Canteen Coin Cards */}
      <SummaryCard foodItems={filteredItems} />
      <CanteenCoinCard totalFoodPrice={totalFoodPrice} />
    </div>
  );
};

export default FoodList;
