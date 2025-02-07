import { render, screen } from "@testing-library/react";
import PropertyCard from "@/components/PropertyCard";
import { describe, it, expect } from '@jest/globals';


const mockProperty = {
  id: 1,
  title: "Luxury Apartment",
  price: "$500,000",
  image: "/placeholder.jpg",
  location: "New York, NY",
};

describe("PropertyCard", () => {
  it("renders property details correctly", () => {
    render(<PropertyCard property={mockProperty} />);
    expect(screen.getByText("Luxury Apartment")).toBeInTheDocument();
    expect(screen.getByText("$500,000")).toBeInTheDocument();
    expect(screen.getByText("New York, NY")).toBeInTheDocument();
  });
});
