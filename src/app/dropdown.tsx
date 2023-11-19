import React, { useState } from 'react';

function CitySelector() {
  const [selectedCity, setSelectedCity] = useState('');

  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
    alert(`You selected ${event.target.value}`);
  };

  return (
    <div className='bg-gray-500 p-6'>
      <select className="flex items-center justify-center text-center w-64 h-12 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-base font-medium text-black hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500" 
      value={selectedCity} onChange={handleChange}>
        <option className="text-black" value="">Select a city</option>
        {cities.map((city, index) => (
          <option className="text-black" key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <br />
      <div>
        <p className="flex items-center justify-center text-center text-white">Selected city: {selectedCity}</p>
      </div>
    </div>
  );
}

export default CitySelector;
