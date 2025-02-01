import React, { useEffect, useState } from "react";
import './last.css'

const SalesCard = ({ title, price, quantity }) => {
  const total = price * quantity;
  return (
    <div className="flex max-w-xl bg-white rounded-lg shadow-md overflow-hidden mb-5 mr-10 w-full">
      <img src="https://imgs.search.brave.com/u6wg9xVm_CSGdedqnwX-z6xBJ3vDgdyXU7d4_hzoTgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk2/Mzg5MTc0L3Bob3Rv/L2RlbGljaW91cy1o/YW1idXJnZXJzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz12/blJxTEdmVWhUSWRj/dUJIOWtyNjBuUFhw/ZDRsVFplU09lWmtB/c0dfRzV3PQ" alt="Food Item" className="w-48 h-48 object-cover" />
      <div className="flex-1 p-5 flex flex-col justify-center items-center">
        <h2 className="text-xl text-gray-800 mb-1 text-center">{title}</h2>
        <div className="text-2xl font-bold text-gray-800 my-2 text-center">${price.toFixed(2)}</div>
        <div className="text-sm text-gray-600 mb-3 text-center">Quantity: {quantity}</div>
      </div>
      <div className="text-xl font-bold text-gray-800 ml-5 text-center border-l-2 border-gray-200 p-5 w-32">
        <div className="font-bold mb-1 text-center">Total</div>
        ${total.toFixed(2)}
      </div>
    </div>
  );
};

const Sales = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const salesData = [
    { title: "Blueberry Pancakes", price: 12.99, quantity: 5 },
    { title: "Blueberry Pancakes", price: 12.99, quantity: 3 },
  ];

  useEffect(() => {
    let total = 0;
    salesData.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalAmount(total);
  }, []);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-5 relative">
      <div className="max-w-3xl w-full flex flex-col items-start relative">
        <h1 className="text-left text-3xl text-gray-800 mb-5">Today's Sales</h1>

        {salesData.map((item, index) => (
          <SalesCard
            key={index}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}

        <div className="text-center mt-10 text-3xl font-bold text-gray-600 p-5 bg-white rounded-lg shadow-md relative z-2">
          TOTAL SALES: $<span className="font-bold">{totalAmount.toFixed(2)}</span>
        </div>
      </div>

      

      <div className="flex justify-center items-center flex-col ml-10">
        
      </div>
    </div>
  );
};

export default Sales;
