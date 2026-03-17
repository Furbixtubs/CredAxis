// src/components/dashboard/Topbar.jsx
import { Bell, Search, Menu } from "lucide-react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useAuth } from "../../features/auth/authContext";
import { useDashboard } from "@/features/auth/dashboard/dashboardContext";

function getInitials(name = "") {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Topbar({ title = "Dashboard", onMenuClick }) {
  const { user } = useAuth();

  const { searchQuery, setSearchQuery } = useDashboard();

  return (
    <header className="bg-surface-card sticky top-5 z-10 mx-4 flex h-20 shrink-0 items-center justify-between rounded-lg px-6">
      {/* Left side - Menu button + Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="text-secondary-400 hover:text-neutral-50 transition-fast md:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>
        <h2 className="font-heading text-2xl font-semibold text-white md:text-3xl">
          {title}
        </h2>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 md:gap-1.5 lg:gap-3">
        {/* Search */}
        <div className="relative hidden rounded-lg bg-[#282C35] sm:block lg:min-w-3xs">
          <Input
            placeholder="Search..."
            className="placeholder:text-placeholder focus-visible:ring-brand-blue h-8 w-full border-0 border-none p-4 text-xs text-neutral-50 outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search
            size={20}
            className="text-placeholder pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
          />
        </div>

        {/* Notification bell */}
        <button className="text-secondary-400 hover:bg-surface-hover transition-fast relative rounded-lg p-2 hover:text-neutral-50">
          <Bell size={16} />
        </button>

        {/* Avatar */}
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarFallback className="bg-brand-blue/20 text-brand-teal text-xs font-semibold">
            {getInitials(user?.name || "U")}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
