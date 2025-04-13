import React, { useState } from "react";

const FoundItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    itemType: "",
    color: "",
    description: "",
    identificationMarks: "",
    foundAt: "",
    timeFound: "",
    keptWith: "",
    pickupUntil: "",
    additionalNotes: "",
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
    console.log("Submitted Data:", formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(to bottom right, #fde2e4, #fefae0, #d8f3dc)",
      }}
    >
      <div className="w-full max-w-3xl p-8 rounded-xl shadow-lg border border-gray-300 bg-white">
        <h1 className="text-4xl font-bold text-center mb-6">FOUND</h1>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Your Information */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Your Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="contact" placeholder="Enter your phone or email" value={formData.contact} onChange={handleChange} className="border p-2 rounded" />
            </div>
          </div>

          {/* Item Details */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Item Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="itemType" placeholder="Item Type" value={formData.itemType} onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="color" placeholder="Color" value={formData.color} onChange={handleChange} className="border p-2 rounded" />
            </div>
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full mt-4 border p-2 rounded" />
            <input type="text" name="identificationMarks" placeholder="Any Identification Marks?" value={formData.identificationMarks} onChange={handleChange} className="w-full mt-2 border p-2 rounded" />
          </div>

          {/* Location */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="foundAt" placeholder="Found At" value={formData.foundAt} onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="timeFound" placeholder="Time Found (Optional)" value={formData.timeFound} onChange={handleChange} className="border p-2 rounded" />
            </div>
          </div>

          {/* Storage and Handover */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Storage and Handover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="keptWith" placeholder="Currently Kept With" value={formData.keptWith} onChange={handleChange} className="border p-2 rounded" />
              <input type="date" name="pickupUntil" value={formData.pickupUntil} onChange={handleChange} className="border p-2 rounded" />
            </div>
          </div>

          {/* Upload Photo */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Upload Photo</h2>
            <input type="file" name="photos" multiple accept="image/*" onChange={handleChange} className="w-full border p-2 rounded" />
          </div>

          {/* Additional Notes */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Additional Notes</h2>
            <input type="text" name="additionalNotes" placeholder="Any other helpful information?" value={formData.additionalNotes} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default FoundItem;






