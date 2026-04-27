"use client";
import React, { useState, useEffect } from 'react';
import { Trash2, Film, Image as ImageIcon, PlusCircle } from 'lucide-react';

export default function AdminPage() {
  const [banners, setBanners] = useState<any[]>([]);
  const [movies, setMovies] = useState<any[]>([]);

  // Ma'lumotlarni yuklash
  useEffect(() => {
    const savedBanners = JSON.parse(localStorage.getItem("banners") || "[]");
    const savedMovies = JSON.parse(localStorage.getItem("movies") || "[]");
    setBanners(savedBanners);
    setMovies(savedMovies);
  }, []);

  // --- O'CHIRISH FUNKSIYALARI ---
  const deleteItem = (id: number, type: 'banners' | 'movies') => {
    if (window.confirm("O'chirishni tasdiqlaysizmi?")) {
      const currentList = type === 'banners' ? banners : movies;
      const updated = currentList.filter(item => item.id !== id);

      if (type === 'banners') setBanners(updated);
      else setMovies(updated);

      localStorage.setItem(type, JSON.stringify(updated));
    }
  };

  // --- QO'SHISH FUNKSIYALARI ---
  const handleAdd = (e: React.FormEvent<HTMLFormElement>, type: 'banners' | 'movies') => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newItem: any = { id: Date.now() };
    formData.forEach((value, key) => {
      newItem[key] = value;
    });

    const currentList = type === 'banners' ? banners : movies;
    const updated = [...currentList, newItem];

    if (type === 'banners') setBanners(updated);
    else setMovies(updated);

    localStorage.setItem(type, JSON.stringify(updated));
    e.currentTarget.reset();
  };

  return (
    <div className="p-6 md:p-12 bg-[#0a0a0a] min-h-screen text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-[#00FF41] mb-12 flex items-center gap-3 italic">
           Malumotlar qo'shish
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <section className="bg-[#141414] p-6 rounded-2xl border border-gray-800 shadow-2xl">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-400">
                <ImageIcon size={24} /> Karusel Banner Qo'shish
              </h2>
              <form onSubmit={(e) => handleAdd(e, 'banners')} className="flex flex-col gap-4">
                <input name="title" placeholder="Kino nomi" className="bg-[#1f1f1f] p-3 rounded-lg border border-transparent focus:border-blue-500 outline-none transition" required />
                <input name="subTitle" placeholder="Subtitr (janr, yil)" className="bg-[#1f1f1f] p-3 rounded-lg border border-transparent focus:border-blue-500 outline-none transition" required />
                <input name="img" placeholder="Rasm URL (Full HD)" className="bg-[#1f1f1f] p-3 rounded-lg border border-transparent focus:border-blue-500 outline-none transition" required />
                <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-bold flex items-center justify-center gap-2 transition active:scale-95">
                  <PlusCircle size={20} /> Bannerni Saqlash
                </button>
              </form>
            </section>

            <div className="grid grid-cols-1 gap-4">
              <h3 className="text-gray-400 font-medium">Mavjud Bannerlar: {banners.length}</h3>
              {banners.map((b) => (
                <div key={b.id} className="flex items-center gap-4 bg-[#141414] p-3 rounded-xl border border-gray-800 group">
                  <img src={b.img} className="w-20 h-12 object-cover rounded-md" alt="" />
                  <div className="flex-1 overflow-hidden">
                    <h4 className="font-bold truncate text-sm">{b.title}</h4>
                    <p className="text-xs text-gray-500 truncate">{b.subTitle}</p>
                  </div>
                  <button onClick={() => deleteItem(b.id, 'banners')} className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <section className="bg-[#141414] p-6 rounded-2xl border border-gray-800 shadow-2xl">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#4CAF50]">
                <Film size={24} /> Yangi Kino Card Qo'shish
              </h2>
              <form onSubmit={(e) => handleAdd(e, 'movies')} className="flex flex-col gap-4">
                <input name="title" placeholder="Kino nomi" className="bg-[#1f1f1f] p-3 rounded-lg border border-transparent focus:border-[#4CAF50] outline-none transition" required />
                <div className="flex gap-4">
                  <input name="rating" placeholder="IMDb" className="w-1/2 bg-[#1f1f1f] p-3 rounded-lg outline-none border border-transparent focus:border-[#4CAF50]" required />
                  <input name="year" placeholder="Yili" className="w-1/2 bg-[#1f1f1f] p-3 rounded-lg outline-none border border-transparent focus:border-[#4CAF50]" required />
                </div>
                <input name="img" placeholder="Poster URL (2:3 format)" className="bg-[#1f1f1f] p-3 rounded-lg border border-transparent focus:border-[#4CAF50] outline-none transition" required />
                <button className="bg-[#4CAF50] hover:bg-[#45a049] text-black p-3 rounded-lg font-bold flex items-center justify-center gap-2 transition active:scale-95">
                  <PlusCircle size={20} /> Kinoni Ro'yxatga Qo'shish
                </button>
              </form>
            </section>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {movies.map((m) => (
                <div key={m.id} className="relative group rounded-xl overflow-hidden aspect-[2/3] border border-gray-800">
                  <img src={m.img} className="w-full h-full object-cover" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-[10px] font-bold truncate">{m.title}</h4>
                    <p className="text-[8px] text-yellow-500">⭐ {m.rating} | {m.year}</p>
                  </div>
                  <button
                    onClick={() => deleteItem(m.id, 'movies')}
                    className="absolute top-2 right-2 p-1.5 bg-red-600 rounded-md opacity-0 group-hover:opacity-100 transition"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}