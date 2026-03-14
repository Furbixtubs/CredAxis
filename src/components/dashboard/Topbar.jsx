// src/components/dashboard/Topbar.jsx
import { Bell, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useAuth } from "../../features/auth/authContext";

function getInitials(name = "") {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function Topbar({ title = "Dashboard" }) {
  const { user } = useAuth();

  return (
    <header className="h-14 bg-surface-card border-b border-dark-border px-6 flex items-center justify-between shrink-0 sticky top-0 z-10 ">
      {/* Page title */}
      <h1 className="text-base font-semibold text-neutral-50 font-heading">
        {title}
      </h1>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-500 pointer-events-none"
          />
          <Input
            placeholder="Search..."
            className="pl-8 h-8 w-48 bg-surface-secondary border-dark-border text-neutral-50 placeholder:text-secondary-500 text-xs rounded-lg focus-visible:ring-brand-blue"
          />
        </div>

        {/* Notification bell */}
        <button className="relative p-2 rounded-lg text-secondary-400 hover:text-neutral-50 hover:bg-surface-hover transition-fast">
          <Bell size={16} />
          {/* Unread dot */}
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-brand-teal rounded-full" />
        </button>

        {/* Avatar */}
        <Avatar className="w-8 h-8 cursor-pointer">
          <AvatarFallback className="bg-brand-blue/20 text-brand-teal text-xs font-semibold">
            {getInitials(user?.name || "U")}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
