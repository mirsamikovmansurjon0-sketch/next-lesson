
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
const handleRegister = async (formdata: FormData) => {
  "use server";

  const newUser = {
    username: formdata.get("username")?.toString() || "",
    email: formdata.get("email")?.toString() || "",
    phone: formdata.get("phone")?.toString() || "",
    full_name: formdata.get("full_name")?.toString() || "",
    region: formdata.get("region")?.toString() || "",
    birth_year: Number(formdata.get("birth_year")),
    password: formdata.get("password")?.toString() || "",
  };

  try {
    const res = await axios.post(
      "https://api-service.fintechhub.uz/register",
      newUser
    );

    console.log("Response:", res.data);
    redirect(`/otp?phone=${newUser.phone}`);

  } catch (error: any) {
    console.log("Xatolik:", error.response?.data || error.message);
  }
  

  revalidatePath("/register");
};


export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <form
        action={handleRegister}
        className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Register
        </h1>

        <input name="username" placeholder="Username" className="border p-3 rounded-lg" required />
        <input name="email" placeholder="Email" className="border p-3 rounded-lg" required />
        <input name="phone" placeholder="Phone" className="border p-3 rounded-lg" required />
        <input name="full_name" placeholder="Full name" className="border p-3 rounded-lg" />
        <input name="region" placeholder="Region" className="border p-3 rounded-lg" />

        <input
          name="birth_year"
          type="number"
          placeholder="Birth year"
          className="border p-3 rounded-lg"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
        />

        <button className="bg-green-500 text-white p-3 rounded-lg">
          Ro‘yxatdan o‘tish
        </button>
      </form>
    </div>
  );
}
  // const handleRegister = async (formdata: FormData) => {
  //   "use server";
  
  //   const newUser = {
  //     username: formdata.get("username")?.toString() || "",
  //     email: formdata.get("email")?.toString() || "",
  //     phone: formdata.get("phone")?.toString() || "",
  //     full_name: formdata.get("full_name")?.toString() || "",
  //     region: formdata.get("region")?.toString() || "",
  //     birth_year: Number(formdata.get("birth_year")),
  //     password: formdata.get("password")?.toString() || "",
  //   };
  
  //   const res=await axios("https://api-service.fintechhub.uz/register", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newUser),
  //   });
  //   // const data=await res.json()
  //   console.log(res)
  //   revalidatePath("/register");
  // };