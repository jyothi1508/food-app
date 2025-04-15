import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('/api/menu');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) return <p>Loading menu...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {menuItems.map((item) => (
        <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
          <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
          <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
          <p className="text-gray-500 capitalize">{item.category}</p>
          <p className="text-green-600 font-bold">₹{item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
