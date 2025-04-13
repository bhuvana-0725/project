import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaHeadphones } from "react-icons/fa";
import { GiJewelCrown, GiClothes } from "react-icons/gi";
import { MdPets, MdPhoneIphone, MdDriveEta, MdSchool } from "react-icons/md";
import { PiBagSimpleFill } from "react-icons/pi";

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

const stateCityData = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Akola", "Latur", "Dhule", "Jalgaon", "Satara", "Sangli", "Ahmednagar", "Nanded", "Chandrapur", "Wardha", "Beed"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangalore", "Hubli", "Belgaum", "Davanagere", "Tumkur", "Shimoga", "Bidar", "Udupi", "Raichur", "Hassan", "Gulbarga", "Bellary", "Kolar", "Chikmagalur", "Mandya", "Bagalkot", "Karwar", "Vijayapura"],
  TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Erode", "Vellore", "Tirunelveli", "Thoothukudi", "Dindigul", "Cuddalore", "Karur", "Thanjavur", "Namakkal", "Virudhunagar", "Nagercoil", "Krishnagiri", "Kanchipuram", "Sivakasi", "Ariyalur"],
  UttarPradesh: ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut", "Prayagraj", "Bareilly", "Ghaziabad", "Noida", "Aligarh", "Moradabad", "Saharanpur", "Gorakhpur", "Jhansi", "Faizabad", "Rampur", "Shahjahanpur", "Firozabad", "Etawah", "Mathura"],
  WestBengal: ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol", "Bardhaman", "Kharagpur", "Haldia", "Malda", "Jalpaiguri", "Bankura", "Darjeeling", "Midnapore", "Raiganj", "Cooch Behar", "Baharampur", "Krishnanagar", "Purulia", "Balurghat", "Serampore"],
};

const items = [
  {
    title: "Smartphone",
    category: "Electronics",
    city: "Bengaluru",
    date: "April 5, 2024",
    image: "/images/smartphone.jpg",
  },
  {
    title: "Backpack",
    category: "Bags",
    city: "Pune",
    date: "March 30, 2024",
    image: "/images/backpack.jpg",
  },
  {
    title: "Laptop",
    category: "Electronics",
    city: "Chennai",
    date: "April 6, 2024",
    image: "/images/laptop.jpg",
  },
  {
    title: "Wallet",
    category: "Others",
    city: "Lucknow",
    date: "April 4, 2024",
    image: "/images/wallet.jpg",
  },
];

export default function LostAndFoundUI() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const filteredItems = items.filter(
    (item) =>
      (!selectedCategory || item.category === selectedCategory) &&
      (!selectedCity || item.city === selectedCity) &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="p-6 min-h-screen"
      style={{
        background: "linear-gradient(to right, #fce4ec, #fff8e1, #f0f8e0)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <select
            className="border rounded px-3 py-2"
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity("");
            }}
          >
            <option value="">Select State</option>
            {Object.keys(stateCityData).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <select
            className="border rounded px-3 py-2"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">Select City</option>
            {selectedState &&
              stateCityData[selectedState].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>

          <div className="flex items-center border rounded px-3 py-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search items"
              className="outline-none flex-1 bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch />
          </div>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border rounded px-4 py-2 flex items-center gap-2"
            >
              Category
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-white shadow rounded border">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setDropdownOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 cursor-pointer"
                  >
                    {cat.icon} {cat.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {filteredItems.map((item) => (
            <div key={item.title} className="border rounded p-4 flex gap-4 items-center bg-white bg-opacity-80">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600 flex items-center gap-1">
                  <FaMapMarkerAlt /> {item.city} · Found on
                </p>
                <p className="text-gray-600 flex items-center gap-1">
                  <FaCalendarAlt /> {item.date}
                </p>
              </div>
              <button className="border px-4 py-2 rounded hover:bg-blue-100">Contact</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

