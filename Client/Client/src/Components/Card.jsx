import React from "react";

const Card = ({ item }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-3 w-[260px] hover:scale-105 transition">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <img
          src="https://i.pravatar.cc/40"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-sm">{item.title}</h3>
          <p className="text-xs text-gray-500">{item.date}</p>
        </div>
      </div>

      {/* Image */}
      <img
        src={item.image}
        className="w-full h-40 object-cover rounded-lg"
      />

      {/* Description */}
      <p className="text-xs text-gray-600 mt-2 line-clamp-3">
        {item.description}
      </p>

      {/* Button */}
      <button className="mt-3 w-full bg-purple-600 text-white py-1.5 rounded-lg hover:bg-purple-700">
        Contact
      </button>
    </div>
  );
};

export default Card;
