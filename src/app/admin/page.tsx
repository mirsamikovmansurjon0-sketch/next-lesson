const api = "http://localhost:8000/orders";

async function Admin() {
  const res = await fetch(api);
  const data = await res.json();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Admin sahifa</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            className="bg-blue-500 text-white rounded-lg shadow p-6 flex flex-col items-center hover:bg-blue-600 transition-colors duration-200" key={item.id}
          >
            <h2 className="text-xl font-semibold mb-2">{item.taom}</h2>
            <h2 className="text-lg">{item.narx} so'm</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;