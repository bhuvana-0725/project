import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaHeadphones } from 'react-icons/fa';
import { GiJewelCrown, GiClothes } from 'react-icons/gi';
import { MdPets, MdPhoneIphone, MdDriveEta, MdSchool } from 'react-icons/md';
import { PiBagSimpleFill } from 'react-icons/pi';

const lostItems = [
  {
    id: 1,
    name: 'Headphones',
    location: 'Bangalore, Karnataka',
    date: 'March 26, 2024',
    image: '/images/headphones.jpg',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Keys',
    location: 'Chennai, Tamil Nadu',
    date: 'March 20, 2024',
    image: '/images/keys.jpg',
    category: 'Others',
  },
  {
    id: 3,
    name: 'Wallet',
    location: 'Hyderabad, Telangana',
    date: 'March 15, 2024',
    image: '/images/wallet.jpg',
    category: 'Bags',
  },
  {
    id: 4,
    name: 'Jewellery',
    location: 'Mumbai, Maharashtra',
    date: 'March 10, 2024',
    image: '/images/jewelleryj.jpg',
    category: 'Jewellery',
  }
];

const stateCityData = {
  Karnataka: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga', 'Davanagere', 'Bellary', 'Tumkur', 'Udupi'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tiruppur', 'Vellore', 'Thoothukudi', 'Erode'],
  Telangana: ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar', 'Ramagundam', 'Mahabubnagar', 'Nalgonda', 'Adilabad', 'Suryapet'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Amravati', 'Kolhapur', 'Nanded'],
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Kadapa', 'Rajahmundry', 'Kakinada', 'Tirupati', 'Anantapur'],
};

const categories = [
  { name: "Electronics", icon: <FaHeadphones /> },
  { name: "Jewellery", icon: <GiJewelCrown /> },
  { name: "Clothing", icon: <GiClothes /> },
  { name: "Pet", icon: <MdPets /> },
  { name: "Mobile", icon: <MdPhoneIphone /> },
  { name: "Vehicle", icon: <MdDriveEta /> },
  { name: "Bags", icon: <PiBagSimpleFill /> },
  { name: "Academics", icon: <MdSchool /> },
  { name: "Others", icon: <span>...</span> },
];

const LostItems = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const cities = selectedState ? stateCityData[selectedState] : [];

  const filteredItems = lostItems.filter(item => {
    const matchState = !selectedState || item.location.includes(selectedState);
    const matchCity = !selectedCity || item.location.includes(selectedCity);
    const matchSearch = !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = !category || item.category.toLowerCase() === category.toLowerCase();
    return matchState && matchCity && matchSearch && matchCategory;
  });

  return (
    <div className="lost-page">
      <h1 className="title">FindMyStuff.com</h1>

      <div className="filters">
        <select
          className="dropdown"
          value={selectedState}
          onChange={e => {
            setSelectedState(e.target.value);
            setSelectedCity('');
          }}
        >
          <option value="">Select State</option>
          {Object.keys(stateCityData).map((state, idx) => (
            <option key={idx} value={state}>{state}</option>
          ))}
        </select>

        <select
          className="dropdown"
          value={selectedCity}
          onChange={e => setSelectedCity(e.target.value)}
          disabled={!selectedState}
        >
          <option value="">Select City</option>
          {cities.map((city, idx) => (
            <option key={idx} value={city}>{city}</option>
          ))}
        </select>

        <input
          type="text"
          className="search"
          placeholder="Search items"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Selector */}
      <div className="category-bar">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`category-button ${category === cat.name ? 'active' : ''}`}
            onClick={() => setCategory(category === cat.name ? '' : cat.name)}
          >
            <span className="icon">{cat.icon}</span>
            <span className="label">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Lost Items Cards */}
      {filteredItems.map(item => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.name} className="card-img" />
          <div className="card-info">
            <h2 className="item-name">{item.name}</h2>
            <p className="location"><FaMapMarkerAlt /> {item.location} - Lost on</p>
            <p className="date"><FaCalendarAlt /> {item.date}</p>
            <div className="tags">
              <button onClick={() => alert(`Filter applied for: ${item.name}`)}>Filter</button>
              <button onClick={() => alert(`Category: ${item.category}`)}>{item.category}</button>
              <button onClick={() => alert(`Contacting about: ${item.name}`)}>Contact</button>
            </div>
          </div>
        </div>
      ))}

      <style>{`
        .lost-page {
          padding: 30px;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(to right, #fce4ec, #fff8e1, #f0f8e0);
          min-height: 100vh;
          animation: fadeIn 0.6s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .title {
          text-align: center;
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 40px;
          color: #000;
        }

        .filters {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .dropdown,
        .search {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 14px;
          min-width: 150px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .category-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 30px;
        }

        .category-button {
          display: flex;
          align-items: center;
          gap: 6px;
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 20px;
          padding: 8px 14px;
          font-size: 14px;
          cursor: pointer;
          color: #333;
          transition: all 0.3s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .category-button:hover {
          background-color: #fce4ec;
        }

        .category-button.active {
          background-color: #f8bbd0;
          color: #000;
          font-weight: bold;
          border-color: #f48fb1;
        }

        .category-button .icon {
          font-size: 18px;
        }

        .category-button .label {
          font-size: 14px;
        }

        .card {
          display: flex;
          gap: 16px;
          background: white;
          border-radius: 16px;
          border: 1px solid #eee;
          margin: 16px auto;
          max-width: 700px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
        }

        .card-img {
          width: 120px;
          height: 120px;
          border-radius: 12px;
          object-fit: cover;
          border: 2px solid #f0f0f0;
        }

        .card-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .item-name {
          font-size: 22px;
          font-weight: bold;
          margin: 0;
          color: #333;
        }

        .location,
        .date {
          font-size: 14px;
          color: #555;
          margin: 6px 0;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .tags {
          margin-top: 10px;
        }

        .tags button {
          border: none;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 13px;
          cursor: pointer;
          margin-right: 6px;
          background-color: #f2f2f2;
          color: #333;
          transition: background-color 0.3s;
        }

        .tags button:hover {
          background-color: #ffefef;
        }
      `}</style>
    </div>
  );
};

export default LostItems;


 






