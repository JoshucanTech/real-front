import { useAuth } from "@/hooks/useAuth";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  if (!user) {
    redirect("/login");
    return null;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      {children}
    </div>
  );
}
