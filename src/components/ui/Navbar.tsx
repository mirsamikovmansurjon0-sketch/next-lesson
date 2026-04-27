import Link from "next/link";
import { cookies } from "next/headers";

export default async function Navbar() {
  const cookieStore = await cookies(); // Endi bu yerda await ishlaydi
  const isLoggedIn = cookieStore.get("isLoggedIn")?.value === "true";
  const userRole = cookieStore.get("user_role")?.value;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#111111] border-b border-gray-800 shadow-md text-white">
      <Link href="/" className="text-xl font-bold text-[#00FF41]">Home</Link>
      
      <div className="flex items-center gap-6">
        {!isLoggedIn ? (
          <Link href="/login" className="hover:text-[#4CAF50] transition">Login</Link>
        ) : (
          <>
            {userRole === "admin" && (
              <Link href="/admin" className="bg-[#4CAF50] text-black px-4 py-2 rounded-lg font-bold">
                Admin
              </Link>
            )}
          </>
        )}
      </div>
    </nav>
  );
}   