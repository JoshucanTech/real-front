"use client";

import { useGetListingsQuery } from "@/store/api";
import PropertyCard from "@/components/PropertyCard";

export default function HomePage() {
  const { data, error, isLoading } = useGetListingsQuery(null);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load listings.</p>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {data?.map((property:any) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
