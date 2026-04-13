import { revalidatePath } from "next/cache";
import { Order } from "../types/types";
import { FaTrashAlt } from "react-icons/fa";

const narxlar = {
  Lavash: 34000,
  Burger: 45000,
  Xotdog: 25000,
  Klab: 38000,
};

const handleAddOrder = async (formdata: FormData) => {
  "use server";
  const taom = formdata.get("taom");
  const miqdor = formdata.get("miqdor");
  const narx = narxlar[taom?.toString() as keyof typeof narxlar];

  const newOrder: Order = {
    taom: taom ? taom?.toString() : "",
    miqdor: miqdor ? +miqdor : 0,
    narx,
    time: new Date().toLocaleString(),
  };

  await fetch("http://localhost:8000/orders", {
    body: JSON.stringify(newOrder),
    method: "POST",
  });

  revalidatePath("/orders");
};

const deleteHandler = async (formdata: FormData) => {
  "use server";
  const id = formdata.get("id");

  await fetch(`http://localhost:8000/orders/${id}`, {
    method: "DELETE",
  });

  revalidatePath("/orders");
};

export default async function Home() {
  const res = await fetch("http://localhost:8000/orders");
  const orders: Order[] = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <form
        className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4"
        action={handleAddOrder}
      >
        <h1 className="text-2xl font-bold text-center text-gray-700">
          Buyurtma qo‘shish
        </h1>

        <select
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          name="taom"
        >
          <option value="Lavash">Lavash</option>
          <option value="Burger">Burger</option>
          <option value="Xotdog">Xotdog</option>
          <option value="Klab">Klab</option>
        </select>

        <input
          required  
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          type="number"
          name="miqdor"
          placeholder="Miqdori"
        />

        <button
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-semibold transition"
          type="submit"
        >
          Kiritish
        </button>
      </form>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10">
        {orders.map((order: Order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-lg p-5 hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {order.taom}
            </h2>

            <p className="text-gray-600">Soni: {order.miqdor}</p>
            <p className="text-gray-600">Narxi: {order.narx} so‘m</p>

            <p className="text-lg font-semibold text-green-600">
              Jami: {order.narx * order.miqdor} so‘m
            </p>

            <p className="text-sm text-gray-400 mt-2">{order.time}</p>

            <form action={deleteHandler} className="mt-4 text-right">
              <input type="hidden" name="id" value={order.id} />

              <button
                className="text-red-500 hover:text-red-700 text-xl transition"
              >
                <FaTrashAlt />
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}