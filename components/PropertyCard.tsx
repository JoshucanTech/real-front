import React from "react";

interface Property {
  id: number;
  title: string;
  price: string;
  image: string;
  location: string;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.title}</h2>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-blue-500 font-bold">{property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
