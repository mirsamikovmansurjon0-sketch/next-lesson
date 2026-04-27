import { redirect } from "next/navigation";
import { cookies } from "next/headers";

interface LoginPageProps {
  searchParams: Promise<{ error?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { error } = await searchParams;

  async function handleLogin(formdata: FormData) {
    "use server";

    const username = formdata.get("username") as string;
    const password = formdata.get("password") as string;

    if (username === "Mansur" && password === "12345") {
      const cookieStore = await cookies();
      
      cookieStore.set("user_role", "admin", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24,
        path: "/",
      });

      redirect("/admin");
    } else {
      redirect("/login?error=1");
    }
  }

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center font-sans">
      <form action={handleLogin} className="bg-[#1a1a1a] p-8 rounded-2xl shadow-2xl w-96 flex flex-col gap-5 border border-gray-800">
        <div className="text-[#00FF41] font-black text-3xl text-center italic mb-2 tracking-tighter"> ADMIN</div>
        
        {error && (
          <p className="bg-red-500/10 text-red-500 p-3 rounded-lg text-sm text-center border border-red-500/20">
            Login yoki parol xato!
          </p>
        )}

        <input 
          name="username" 
          type="text"
          placeholder="Admin login" 
          className="bg-gray-800 border-none text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#4CAF50] transition" 
          required 
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Parol" 
          className="bg-gray-800 border-none text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#4CAF50] transition" 
          required 
        />
        
        <button type="submit" className="bg-[#4CAF50] text-white p-3 rounded-lg font-bold hover:bg-[#45a049] active:scale-95 transition">
          Tizimga kirish
        </button>
      </form>
    </div>
  );
}