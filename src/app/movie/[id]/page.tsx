"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Star, ChevronLeft, Play, Calendar, Film } from 'lucide-react';

export default function MovieDetail() {
    const { id } = useParams();
    const router = useRouter();
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem("movies") || "[]");

        const foundMovie = savedMovies.find((m: any) => m.id == id);

        if (foundMovie) {
            setMovie(foundMovie);
        }
    }, [id]);

    if (!movie) return <div className="h-screen bg-black flex items-center justify-center text-white">Yuklanmoqda...</div>;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            <button
                onClick={() => router.back()}
                className="absolute top-24 left-8 z-20 flex items-center gap-2 bg-black/50 hover:bg-[#4CAF50] p-3 rounded-full transition-all"
            >
                <ChevronLeft size={24} />
            </button>
            <div className="relative h-[60vh] w-full">
                <img src={movie.img} className="w-full h-full object-cover opacity-30" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 md:p-16 flex flex-col md:flex-row gap-8 items-end w-full">
            
                    <div className="w-48 aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hidden md:block">
                        <img src={movie.img} className="w-full h-full object-cover" alt="" />
                    </div>

                    <div className="flex-1">
                        <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 text-[#00FF41]">{movie.title}</h1>
                        <div className="flex flex-wrap items-center gap-6 text-lg font-medium text-gray-300">
                            <span className="flex items-center gap-2 text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-lg">
                                <Star size={20} fill="currentColor" /> {movie.rating}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={20} /> {movie.year}
                            </span>
                            <span className="flex items-center gap-2">
                                <Film size={20} /> HD / 4K
                            </span>
                        </div>
                    </div>

                    <button className="bg-[#4CAF50] hover:bg-[#45a049] text-black px-12 py-5 rounded-2xl font-black text-xl flex items-center gap-3 transition-transform active:scale-95">
                        <Play size={28} fill="currentColor" /> HOZIR KO'RISH
                    </button>
                </div>
            </div>
            <div className="p-8 md:p-16 max-w-4xl">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-[#4CAF50] pl-4">Film haqida</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Bu film Next.js va Tailwind yordamida yaratilgan itv.uz kloni uchun namunaviy ma'lumotdir.
                    Hozirda biz faqat poster va umumiy ma'lumotlarni saqlayapmiz. Haqiqiy loyihada bu yerda
                    filmning to'liq tavsifi, aktyorlar va treylerlar bo'lishi mumkin.
                </p>
            </div>
        </div>
    );
}