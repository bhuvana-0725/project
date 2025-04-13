import React, { useState } from "react";

const ReportLost = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    lostItemName: "",
    areaLost: "",
    itemType: "",
    itemColor: "",
    itemSize: "",
    brand: "",
    distinguishingFeatures: "",
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photos") {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Lost Item Data:", formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(to bottom right, #fde2e4, #fefae0, #d8f3dc)",
      }}
    >
      <div className="w-full max-w-3xl p-8 rounded-xl shadow-lg border border-gray-300 bg-white">
        <h1 className="text-4xl font-bold text-center mb-6">LOST</h1>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Personal Info */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-4 border p-2 rounded"
              required
            />
          </div>

          {/* Lost Item Basic Info */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Lost Item Info</h2>
            <input
              type="text"
              name="lostItemName"
              placeholder="Lost Item Name"
              value={formData.lostItemName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="text"
              name="areaLost"
              placeholder="Area Where Lost"
              value={formData.areaLost}
              onChange={handleChange}
              className="w-full mt-4 border p-2 rounded"
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                name="itemType"
                placeholder="Item Type"
                value={formData.itemType}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="itemColor"
                placeholder="Item Color"
                value={formData.itemColor}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
            </div>
          </div>

          {/* Size & Brand */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Item Details</h2>
            <input
              type="text"
              name="itemSize"
              placeholder="Item Size"
              value={formData.itemSize}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand/Make"
              value={formData.brand}
              onChange={handleChange}
              className="w-full mt-4 border p-2 rounded"
            />
          </div>

          {/* Distinguishing Features */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Distinguishing Features</h2>
            <textarea
              name="distinguishingFeatures"
              placeholder="Distinguishing Item Features"
              value={formData.distinguishingFeatures}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Upload Photo */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Upload Photo</h2>
            <input
              type="file"
              name="photos"
              multiple
              accept="image/*"
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportLost;







