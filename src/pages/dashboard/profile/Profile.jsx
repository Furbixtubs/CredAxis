import { useState } from "react";
import { useAuth } from "../../../features/auth/authContext";
import { Pencil } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

// reusable edit btn
export const EditBtn = () => {
  return (
    <div
      className="bg-primary-08 flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-white select-none"
      onClick={() => document.getElementById("avatarInput").click()}
    >
      <Pencil size={16} />
      Edit
    </div>
  );
};

// Main component
export default function Profile() {
  const { user } = useAuth();
  const [avatarLoading, setAvatarLoading] = useState(false);

  const fullName =
    [user?.first_name, user?.last_name].filter(Boolean).join(" ") || "User";

  const initials =
    [user?.first_name?.[0], user?.last_name?.[0]]
      .filter(Boolean)
      .join("")
      .toUpperCase() || "U";

  function handleAvatarChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarLoading(true);
    // TODO: call PATCH /bank/borrower-profile/:id with file
    setTimeout(() => setAvatarLoading(false), 1000);
  }

  const personInfo = [
    { label: "First Name", value: { first_name: user?.first_name } },
    { label: "Last Name", value: { last_name: user?.last_name } },
    { label: "Email", value: { email: user?.email } },
    { label: "Phone", value: { phone: user?.phone_number || "N/A" } },
  ];

  const locationInfo = [
    { label: "Country", value: { country: user?.country || "N/A" } },
    {
      label: "City/State",
      value: { city: user?.city || "N/A", state: user?.state || "N/A" },
    },
  ];

  return (
    <main className="mx-auto space-y-6 pb-12">
      {/* Page title */}
      <div>
        <h2 className="text-xl font-semibold text-black">Account Settings</h2>
      </div>

      {/* Profile section */}
      <article className="flex flex-col items-center justify-center gap-4 bg-white p-4">
        <section className="flex w-full max-w-6xl flex-col gap-4">
          <h3>My Profile</h3>
          <section className="flex items-center justify-between gap-4 border border-[#C8CBCF] p-4">
            <div className="flex min-w-0 items-center gap-3">
              <Avatar className="h-16 w-16">
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>

              <div className="flex min-w-0 flex-col gap-0 text-black">
                <p className="m-0 text-3xl font-semibold">{fullName}</p>
                <p className="text-[16px ] m-0 truncate">{user?.email}</p>
              </div>
            </div>

            <EditBtn />
          </section>
        </section>

        <section className="flex w-full max-w-6xl flex-col gap-4 border border-[#C8CBCF] p-4">
          <div className="flex items-center justify-between gap-4">
            <h3>Personal Information</h3>
            <EditBtn />
          </div>

          <article className="grid grid-cols-2 gap-4">
            {personInfo.map(({ label, value }) => {
              const val =
                value && typeof value === "object"
                  ? Object.values(value)[0]
                  : value || "N/A";
              return (
                <div
                  key={label}
                  className="flex flex-col justify-between text-xl"
                >
                  <p className="m-0 text-[#787A7C]">{label}</p>
                  <p className="m-0 truncate font-semibold text-[#020304]">
                    {val}
                  </p>
                </div>
              );
            })}
          </article>
        </section>

        <section className="flex w-full max-w-6xl flex-col gap-4 border border-[#C8CBCF] p-4">
          <div className="flex items-center justify-between gap-4">
            <h3>Personal Information</h3>
            <EditBtn />
          </div>

          <article className="grid grid-cols-2 gap-4">
            {locationInfo.map(({ label, value }) => {
              const val =
                Object.values(value).filter(Boolean).join(", ") || "N/A";
              return (
                <div
                  key={label}
                  className="flex flex-col justify-between text-xl"
                >
                  <p className="m-0 text-[#787A7C]">{label}</p>
                  <p className="m-0 font-semibold text-[#020304]">{val}</p>
                </div>
              );
            })}
          </article>
        </section>
      </article>
    </main>
  );
}
