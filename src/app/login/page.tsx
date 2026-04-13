 

export default function LoginPage() {

  const handleSubmit = async(formdata:FormData) => {
    "use server"
        const tel=formdata.get("tel")
        const parol=formdata.get("parol")
        console.log(tel,parol);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form action={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="tel" className="block text-gray-700 font-medium mb-1">
            Telefon raqam
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="998901234567"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="parol" className="block text-gray-700 font-medium mb-1">
            Parol
          </label>
          <input
            type="password"
            id="parol"
            name="parol"
            required
            autoComplete="off"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
        >
          Login
        </button>
      </form>
      {/* {submitted && (
        <div className="mt-5 text-green-600 text-center font-medium">
          Submitted! (No authentication logic implemented)
        </div>
      )} */}
    </div>
  );
}
